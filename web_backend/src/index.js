import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import Teacher from './models/teacher';
import Student from './models/student';
import Admin from './models/admin';
import Schema from './schema/schema';
import fetch from 'node-fetch';

const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';
const CLIENT_ID = '162938498619-oloa040ksgc64aubtv7hi7pmnbanmmul.apps.googleusercontent.com';

export const addStudent = async (name, email) => {
    if (!name || !email) { // no credentials = fail
        return false;
    }
    const s = new Student({ name, email });
    return s.save();
};

export const addTeacher = async (name, email) => {
    if (!name || !email) { // no credentials = fail
        return false;
    }
    const t = new Teacher({ name, email });
    return t.save();
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
            req.user = getaccountFromGoogleToken(token) || req.user;
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
        const { tokenId, role } = req.body;
        const { existing, payload } = await getaccountFromGoogleToken(tokenId);
        console.log(existing);
        // console.log('yo');
        // console.log(existing);
        // console.log({ role });
        // const combined = await Object.assign(existing, { role });
        // console.log({ existing, role });
        // console.log('yo');
        // if (existing) {
        //     return res.json({ existing, role });
        //     // response.role = { role };
        //     // // console.log(role);
        //     // console.log(response);
        //     // return response;
        // }
        // if (role === 'student') {
        //     if (Student.find({ name: payload.name, email: payload.email })) {
        //         console.log((Student.find({ name: payload.name, email: payload.email })));
        //         console.log('FOUND STUDENT');
        //         return (Student.find({ name: payload.name, email: payload.email }));
        //     }
        // }
        // if (role === 'teacher') {
        //     if (Teacher.find({ name: payload.name, email: payload.email })) {
        //         console.log('FOUND TEACHER');
        //         return (Teacher.find({ name: payload.name, email: payload.email }));
        //     }
        // }
        // if (role === 'admin') {
        //     if (Admin.find({ name: payload.name, email: payload.email })) {
        //         console.log('FOUND ADMIN');
        //         return (Admin.find({ name: payload.name, email: payload.email }));
        //     }
        // }

        // Teacher.find({ name: payload.name, email: payload.email });

        //  await res.json(

        const x = await res.json(({
            student: addStudent,
            teacher: addTeacher,
            admin: async () => ({ error: 'Cannot create Admin acccount' }),
        })[role](payload.name, payload.email));
        // console.log(x);
        console.log('ADDED USER');
        return x;
        // response.role = role;
        // // console.log(role);
        // return response;
    } catch (e) {
        console.trace(e);
    }
});


app.listen(8080);
