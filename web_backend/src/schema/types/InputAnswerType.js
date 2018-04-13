import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const InputAnswer = new GraphQLInputObjectType({
    name: 'InputAnswer',
    description: 'Self Descriptive',
    fields() {
        return {
            answerName: { type: GraphQLString },
            isCorrect: { type: GraphQLBoolean },
        };
    },
});

export default InputAnswer;
