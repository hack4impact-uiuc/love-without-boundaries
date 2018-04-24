import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const AnsweredQuestion = new GraphQLInputObjectType({
    name: 'InputSubmittedAnswer',
    description: 'Input type of answer for a given question',
    fields() {
        return {
            questionID: { type: GraphQLString },
            answerChosen: { type: GraphQLString }
        };
    },
});

export default AnsweredQuestion;
