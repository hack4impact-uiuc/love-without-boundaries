import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import Answer from './AnswerType';

const Question = new GraphQLObjectType({
    name: 'Question',
    description: 'Question with multiple choice answers',
    fields() {
        return {
            id: {
                type: GraphQLID,
            },
            questionName: {
                type: GraphQLString,
            },
            answers: {
                type: new GraphQLList(Answer),
            },
        };
    },
});

export default Question;
