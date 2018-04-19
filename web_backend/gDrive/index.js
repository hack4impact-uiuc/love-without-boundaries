const { send, json } = require('micro');
const cors = require('micro-cors')();
const fetch = require('node-fetch');
const url = require('url');

const GRAPHQL_URL = 'http://localhost:8080';
const handler = async (req, res) => {
    const { pathname } = url.parse(req.url);
    const data = await json(req); // this should have student id, or the lesson id with worksheetURL
    if (pathname && pathname == '/newLesson') {
        const data = await fetch(`${GRAPHQL_URL}`, {
            body: JSON.stringify({
                query: '{students{id}}',
                variables: null,
                operationName: null,
            }),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            mode: 'cors',
        });
        const jsonData = await data.json();
        console.log(jsonData);
        // the path sent is 'newLesson'
        // TODO: get the lessonID and worksheet URL from data
        // TODO: request for list of students
        // TODO: loop through students and for each student create a new worksheet
        // make it view only, and then generate a mutation to graphql to add the new link for each studetn
    }
    // TODO: check whether user token is passed in and if it is authenticated
    // TODO: login service account and get google access_token
    // TODO: request for student's array of copied worksheets
    // TODO: request for list of lessons
    // TODO: loop through the copied worksheets and add new copies of worksheets if needed
    // TODO: the copied worksheets must be created inside a folder and made "edit" to all
    // TODO: then, add the worksheets to the backend
    const ret = { success: 'true' };
    send(res, 200, ret);
};

module.exports = cors(handler);