import micro, {send} from 'micro';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema.js';

// import Teacher from './../../web_backend/src/models/teacher';
// import Student from './../../web_backend/src/models/student';
import Admin from './models/admin';
import Student from './models/student';
import Teacher from './models/teacher';

const cors = require('micro-cors')()
const mongoose = require('mongoose');



const MONGO_URI = 'mongodb://ariamalkani:malkani@ds147228.mlab.com:47228/lwb';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

const withAuth = next => (req, res) => {
    req.user = null;
    const header = req.headers.authorization
    if(header) {
        const [type, token] = header.split(' ')
        switch(type) {
            case 'Bearer':
                // TODO: Find user in Teacher/Student/Admin model and set r
                break;
        }
    }
    return next(req, res);
}

exports.default = cors(
    withAuth(
        graphqlHTTP(
            { schema: Schema, pretty: true, graphiql: true }
        )
    )
);