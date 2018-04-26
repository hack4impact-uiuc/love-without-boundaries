import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const Answer = new GraphQLObjectType({
    name: 'Answer',
    description: 'The name of the answer and if its correct or not',
    fields() {
        return {
            answerName: {
                type: GraphQLString,
                description: 'The name of the answer',
            },
            isCorrect: {
                type: GraphQLBoolean,
                description: 'Whether this answer is the correct one or not',
            },
        };
    },
});

export default Answer;
