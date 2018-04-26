import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const InputSubmittedAnswer = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswer',
    description: 'Input type of submitted answer',
    fields() {
        return {
            questionID: { type: GraphQLString },
            answerChosen: { type: GraphQLString }
        };
    },
});

export default InputSubmittedAnswer;
