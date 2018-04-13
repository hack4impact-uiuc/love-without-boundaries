import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLID } from 'graphql';
import InputSubmittedAnswer from './InputSubmittedAnswerType';

const InputPastQuiz = new GraphQLInputObjectType({
    name: 'InputPastQuiz',
    description: 'Self Descriptive',
    fields() {
        return {
            lessonID: { type: GraphQLID },
            quizName: { type: GraphQLString },
            score: { type: GraphQLInt },
            submittedAnswers: {
                type: new GraphQLList(InputSubmittedAnswer),
            },
        };
    },
});

export default InputPastQuiz;
