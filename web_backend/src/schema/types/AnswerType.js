import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const Answer = new GraphQLObjectType({
    name: 'Answer',
    description: 'The name of the answer and if its correct or not',
    fields() {
        return {
            answerName: { type: GraphQLString },
            isCorrect: { type: GraphQLBoolean },
        };
    },
});

export default Answer;
