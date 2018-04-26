import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const InputAnswer = new GraphQLInputObjectType({
    name: 'InputAnswer',
    description: 'Input type of answer',
    fields() {
        return {
            answerName: { type: GraphQLString },
            isCorrect: { type: GraphQLBoolean },
        };
    },
});

export default InputAnswer;
