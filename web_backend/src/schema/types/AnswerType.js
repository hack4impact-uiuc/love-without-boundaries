import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const Answer = new GraphQLObjectType({
    name: 'Answer',
    description: 'Self Descriptive',
    fields() {
        return {
            answerName: { type: GraphQLString },
            isCorrect: { type: GraphQLBoolean },
        };
    },
});

export default Answer;
