import { GraphQLObjectType, GraphQLString } from 'graphql';

const SubmittedAnswer = new GraphQLObjectType({
    name: 'SubmittedAnswer',
    description: 'Self Descriptive',
    fields() {
        return {
            questionID: {
                type: GraphQLString,
                description: 'id of the question the answer was from',
            },
            answerChosen: {
                type: GraphQLString,
                description: 'The name of the answer that was chosen',
            },
        };
    },
});

export default SubmittedAnswer;
