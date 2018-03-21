import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql';
import InputQuestion from './InputQuestionType';

const InputQuiz = new GraphQLInputObjectType({
    name: 'InputQuiz',
    description: 'Self Descriptive',
    fields() {
        return {
            name: {
                type: GraphQLString,
            },
            questions: {
                type: new GraphQLList(InputQuestion),
            },
            lessonID: { type: GraphQLString },
        };
    },
});

export default InputQuiz;
