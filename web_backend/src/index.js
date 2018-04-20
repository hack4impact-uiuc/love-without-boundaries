// import micro, { send } from 'micro';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema.js';
import User from './models/user';
import Teacher from './models/teacher';
import Student from './models/student';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
// import find from 'lodash/find';
// import { isNull } from 'util';

// const cors = require('micro-cors')();
var cors = require('cors')
const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';


const expiresIn = '3h';
const secret = 'samplejwtauthgraphql'; // secret key
// const tokenPrefix = 'JWT'; // Prefix for HTTP header

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
    if (!name || !email || !token || !role) { // no credentials = fail
        return false;
    }
    const user = await User.find({
        name, email, token, role,
    });
    if (user.length === 0) {
        return false;
    }
    const payload = {
        name,
        email,
        token,
        role,
    };
    const jwtToken = jwt.sign(payload, secret, {
        expiresIn,
    });
    return jwtToken;
};


export const verifyToken = async (payload) => {
    if (!payload) {
        throw new Error('No token provided');
    }
    const data = (jwt.verify(payload, 'samplejwtauthgraphql'));
    const user = await User.find({
        name: data.name, email: data.email, token: data.token, role: data.role,
    });
    if (user.length === 0) {
        return false;
    }
    return true;
};


mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

const withAuth = next => async (req, res) => {
    req.user = null;
    const header = req.headers.authorization;
    if (header) {
        const [type, token] = header.split(' ');
        switch (type) {
        case 'Bearer':
            // TODO: Find user in Teacher/Student/Admin model and set r
            // console.log(token);
            if (await verifyToken(token)) {
                console.log('verified');
                console.log(req);
                return next(req, res);
            }
            break;
        }
    }
    return null;
};

const express = require('express');

const app = express();
app.use(bodyParser.json());

app.use(cors())

app.use('/graphql', withAuth(graphqlHTTP({
    schema: Schema,
    graphiql: true,
})));

app.post('/login', async (req, res) => {
    console.log('jio');
    if (req.body.role === 'student') {
        const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
        res.json(token);
    }
    res.json('failed');
});

app.post('/register', async (req, res) => {
    if (req.body.role === 'student') {
        addStudent(req.body.name, req.body.email, req.body.googleAuthToken);
    } else if (req.body.role === 'teacher') {
        addTeacher(req.body.name, req.body.email, req.body.googleAuthToken);
    }
    const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
    res.send(token);
});


app.listen(8080);
