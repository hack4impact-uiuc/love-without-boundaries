// @flow

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

function fetchQuery(
    operation,
    variables,
) {
    // https://micro-graphql-zqkngkqsub.now.sh/
    // http://localhost:8080/
    return fetch('https://micro-graphql-nmsecladyu.now.sh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json());
}

export default new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});
