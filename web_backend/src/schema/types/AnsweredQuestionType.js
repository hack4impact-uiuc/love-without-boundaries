import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const AnsweredQuestion = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswer',
    description: 'Input type of answer for a given question',
    fields() {
        return {
            questionID: {
                type: GraphQLString,
                description: 'The id of the question',
            },
            answerChosen: {
                type: GraphQLString,
                description: 'The answer the student chose for the question',
            },
        };
    },
});

export default AnsweredQuestion;
