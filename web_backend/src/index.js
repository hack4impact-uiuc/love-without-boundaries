import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import User from './models/user';
import Teacher from './models/teacher';
import Student from './models/student';
import Admin from './models/admin';
import Schema from './schema/schema';
import jwt_decode from 'jwt-decode';


const cors = require('cors');
const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';


const expiresIn = '3h';
const secret = 'samplejwtauthgraphql'; // secret key

export const addStudent = async (name, email, token) => {
    if (!name || !email || !token) { // no credentials = fail
        return false;
    }
    const u = new User({
        name,
        email,
        token,
        role: 'student',
    });
    await u.save();
    const s = new Student({ name, email });
    return s.save();
};

export const addTeacher = async (name, email, token) => {
    if (!name || !email || !token) { // no credentials = fail
        return false;
    }
    const u = new User({
        name,
        email,
        token,
        role: 'teacher',
    });
    await u.save();
    const s = new Teacher({ name, email });
    return s.save();
};


export const createToken = async (name, email, token, role) => {
    if (!name || !email || !token || !role) {
        return '';
    }
    const user = await User.find({
        name, email, token, role,
    });
    if (user.length === 0) {
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

const withAuth = next => async (req, res) => {
    req.user = null;
    const header = req.headers.authorization;
    if (header) {
        const [type, token] = header.split(' ');
        let tokenData;
        switch (type) {
        case 'Bearer':
            tokenData = jwt.verify(token, 'samplejwtauthgraphql');
            if (tokenData) {
                req.user = await User.find({ role: tokenData.role, token: tokenData.token });
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

const express = require('express');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use('/graphql', withAuth(graphqlHTTP({
// app.use('/graphql', (graphqlHTTP({
    schema: Schema,
    graphiql: true,
})));

app.post('/login', async (req, res) => {
    if (req.body.role === 'student') {
        Student.find({ name: req.body.name, email: req.body.email });
    } else if (req.body.role === 'teacher') {
        Teacher.find({ name: req.body.name, email: req.body.email });
    } else if (req.body.role === 'admin') {
        Admin.find({ name: req.body.name, email: req.body.email });
    } else {
        res.json('failed');
    }
    const token = await createToken(req.body.googleAuthToken, req.body.role);
    res.json(token);
});

app.post('/register', async (req, res) => {
    if (req.body.role === 'student') {
        addStudent(req.body.name, req.body.email, req.body.googleAuthToken);
    } else if (req.body.role === 'teacher') {
        addTeacher(req.body.name, req.body.email, req.body.googleAuthToken);
    }
    const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
    console.log(token);
    res.json(token);
});


app.listen(8080);
