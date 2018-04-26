import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import Answer from './AnswerType';

const Question = new GraphQLObjectType({
    name: 'Question',
    description: 'Question with multiple choice answers',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'id of the question',
            },
            questionName: {
                type: GraphQLString,
                description: 'The name of the question',
            },
            answers: {
                type: new GraphQLList(Answer),
                description: 'The list of the answers that you can choose from',
            },
        };
    },
});

export default Question;
