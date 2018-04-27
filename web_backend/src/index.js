import express from 'express';
import graphqlHTTP from 'express-graphql';
import fetch from 'node-fetch';
import { toGlobalId } from 'graphql-relay';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import Teacher from './models/teacher';
import Student from './models/student';
import Admin from './models/admin';
import Schema from './schema/schema';

const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';
const CLIENT_ID = '162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com';

export const addStudent = async (name, email, tokenId) => {
    if (!name || !email) { // no credentials = fail
        return false;
    }
    const student = await Student.findOne({ name, email });
    if (student !== null) {
        return student;
    }
    const s = new Student({ name, email, googleID: tokenId });
    return s.save();
};

export const addTeacher = async (name, email, tokenId) => {
    if (!name || !email) { // no credentials = fail
        return false;
    }
    const teacher = await Teacher.findOne({ name, email });
    if (teacher !== null) {
        return Teacher.findOne({ name, email });
    }
    const t = new Teacher({ name, email, googleID: tokenId });
    return t.save();
};
export const addAdmin = async (name, email, tokenId) => {
    if (!name || !email) { // no credentials = fail
        return false;
    }
    const admin = await Admin.findOne({ name, email });
    if (admin !== null) {
        return Admin.findOne({ name, email });
    }
    return null;
};

export const createToken = async (name, email, token, role) => {
    if (!name || !email || !token || !role) {
        return '';
    }
    const payload = {
        token,
        role,
    };
    const jwtToken = await jwt.sign(payload, secret, {
        expiresIn,
    });
    return jwtToken;
};

const getaccountFromGoogleToken = async (tokenId) => {
    const tokenInfoRes = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${tokenId}`);
    const payload = await tokenInfoRes.json();

    const [student, teacher] = await Promise.all([Student, Teacher].map(x => x.findOne({ email: payload.email })));
    return { existing: student || teacher, payload };
};

const withAuth = next => async (req, res) => {
    req.user = null;
    const header = req.headers.authorization;
    if (header) {
        const [type, token] = header.split(' ');
        switch (type) {
        case 'Bearer':
            req.user = await getaccountFromGoogleToken(jwt_decode(token).tokenId) || req.user;
            if (req.user.payload.error_description) {
                return null;
            }
            break;
        default:
            break;
        }
    }
    return next(req, res);
};

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use('/graphql', withAuth(graphqlHTTP({
    schema: Schema,
    graphiql: true,
})));

app.post('/auth/google', async (req, res) => {
    try {
        const { tokenId, role, accessToken } = req.body;
        const { existing, payload } = await getaccountFromGoogleToken(tokenId);

        if (role === 'student') {
            console.log(accessToken);
            const student = await addStudent(payload.name, payload.email, tokenId);
            const id = toGlobalId('Student', student._id);
            const ret = {
                id, name: student.name, email: student.email, gapi_access_token: accessToken, userType: 'student', tokenId,
            };

            // TODO: store secret key in .env file!!!
            const token = jwt.sign(ret, 'secret', { expiresIn: '3 hours' });
            res.json({ role: 'student', data: ret, token });
        } else if (role === 'teacher') {
            const teacher = await addTeacher(payload.name, payload.email, tokenId);
            const id = toGlobalId('Teacher', teacher._id);
            const ret = {
                id, name: teacher.name, email: teacher.email, gapi_access_token: accessToken, userType: 'teacher', tokenId,
            };

            // TODO: store secret key!!
            const token = jwt.sign(ret, 'secret', { expiresIn: '3 hours' });
            res.json({ role: 'teacher', data: ret, token });
        } if (role === 'admin') {
            const admin = await addAdmin(payload.name, payload.email, tokenId);
            if (admin == null) {
                res.json({ error: 'Cannot create Admin account ' });
            } else {
                const id = toGlobalId('Admin', admin._id);
                const ret = {
                    id, name: admin.name, email: admin.email, gapi_access_token: accessToken, userType: 'admin', tokenId,
                };

                // TODO: store secret key!!
                const token = jwt.sign(ret, 'secret', { expiresIn: '3 hours' });
                res.json({ role: 'admin', data: ret, token });
            }
        }

        // res.json(({
        //     student: await addStudent,
        //     teacher: await addTeacher,
        //     admin: async () => ({ error: 'Cannot create Admin acccount' }),
        // })[role](payload.name, payload.email));
    } catch (e) {
        console.trace(e);
    }
});


app.listen(8080);
