// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addURLMutation($input: AddURLInput!) {
        addURL(input: $input) {
            student {
                id
            }
            clientMutationId
        }
    }
`;

function addURL(environment: Environment, id: string, url: string) {
    const variables = {
        input: {
            id,
            url,
        },
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
            console.log('Response Received from Server');
        },
        onError: err => console.error(err),
    });
}

export default addURL;
