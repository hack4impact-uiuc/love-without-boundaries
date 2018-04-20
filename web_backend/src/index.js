import micro, { send } from 'micro';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema.js';

// import Teacher from './../../web_backend/src/models/teacher';
// import Student from './../../web_backend/src/models/student';
import Admin from './models/admin';
import User from './models/user';
import Teacher from './models/teacher';

const cors = require('micro-cors')();
const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';

import jwt from 'jsonwebtoken';
import find from 'lodash/find';
import { isNull } from 'util';

const expiresIn = '3h';
const secret = 'samplejwtauthgraphql'; // secret key
const tokenPrefix = 'JWT'; // Prefix for HTTP header


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
                return next(req, res);
            }
            break;
        }
    }

    // console.log('yo');

    // // }
    // console.log(header);
    // // TODO: If it a register call, dont auth
    // const token = await createToken('aria', 'aria@gmail.com', '123', 'student');
    // console.log(token);
    // if (await verifyToken(token)) {
    //     return next(req, res);
    // }
    return null;

    // return next(req, res);
};

exports.default = cors(withAuth(graphqlHTTP({ schema: Schema, pretty: true, graphiql: true })));
