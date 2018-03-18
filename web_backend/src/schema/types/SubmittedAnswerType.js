import { GraphQLObjectType, GraphQLString } from 'graphql';

const SubmittedAnswer = new GraphQLObjectType({
    name: 'SubmittedAnswer',
    description: 'Self Descriptive',
    fields() {
        return {
            questionID: { type: GraphQLString },
            answerChosen: { type: GraphQLString },
            correctAnswer: { type: GraphQLString },
        };
    },
});

export default SubmittedAnswer;
