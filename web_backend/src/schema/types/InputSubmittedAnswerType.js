import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const InputSubmittedAnswer = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswer',
    description: 'Self Descriptive',
    fields() {
        return {
            questionID: { type: GraphQLString },
            answerChosen: { type: GraphQLString },
            correctAnswer: { type: GraphQLString },
        };
    },
});

export default InputSubmittedAnswer;
