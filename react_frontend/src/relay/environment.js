// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { BACKEND_URL } from '../utils';

function fetchQuery(operation, variables) {
    return fetch(`${BACKEND_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // RequiredAuthorization: 'false',
            // Authorization: 'Login',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
            // request: 'login',
            // name: 'aria',
        }),
    }).then(response => response.json());
}

export default new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});
