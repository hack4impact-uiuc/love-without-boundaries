import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLFloat, GraphQLID } from 'graphql';
import InputSubmittedAnswer from './InputSubmittedAnswerType';

const InputPastQuiz = new GraphQLInputObjectType({
    name: 'InputPastQuiz',
    description: 'Input type of past quiz',
    fields() {
        return {
            lessonID: { type: GraphQLString },
            quizName: { type: GraphQLString },
            score: { type: GraphQLFloat },
            submittedAnswers: {
                type: new GraphQLList(InputSubmittedAnswer),
            },
        };
    },
});

export default InputPastQuiz;
