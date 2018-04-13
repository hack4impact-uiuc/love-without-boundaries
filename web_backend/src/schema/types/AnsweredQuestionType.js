import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const AnsweredQuestion = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswer',
    description: 'Self Descriptive',
    fields() {
        return {
            questionID: { type: GraphQLString },
            answerChosen: { type: GraphQLString }
        };
    },
});

export default AnsweredQuestion;
