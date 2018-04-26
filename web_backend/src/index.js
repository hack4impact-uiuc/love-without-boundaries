import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import User from './models/user';
import Teacher from './models/teacher';
import Student from './models/student';
import Schema from './schema/schema';


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
    const jwtToken = await jwt.sign(payload, secret, {
        expiresIn,
    });
    console.log(jwtToken);
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

const withAuth = next => async (req, res) => {
    req.user = null;
    const header = req.headers.authorization;
    if (header) {
        const [type, token] = header.split(' ');
        switch (type) {
        case 'Bearer':
            if (await verifyToken(token)) {
                return next(req, res);
            }
            break;
        }
    }
    return null;
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
    if (req.body.role) {
        const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
        res.json(token);
    }
    res.json('failed');
});

app.post('/register', async (req, res) => {
    if (req.body.role === 'student') {
        addStudent(req.body.name, req.body.email, req.body.googleAuthToken);
        const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
        console.log(token);
        res.json(token);
    } else if (req.body.role === 'teacher') {
        addTeacher(req.body.name, req.body.email, req.body.googleAuthToken);
        const token = await createToken(req.body.name, req.body.email, req.body.googleAuthToken, req.body.role);
        console.log(token);
        res.json(token);
    }
    res.json('failed');
});


app.listen(8080);
