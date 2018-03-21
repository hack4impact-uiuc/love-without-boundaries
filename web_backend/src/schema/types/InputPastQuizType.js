import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import InputSubmittedAnswer from './InputSubmittedAnswerType';

const InputPastQuiz = new GraphQLInputObjectType({
    name: 'InputPastQuiz',
    description: 'Self Descriptive',
    fields() {
        return {
            quizName: { type: GraphQLString },
            score: { type: GraphQLInt },
            questions: {
                type: new GraphQLList(InputSubmittedAnswer),
            },
        };
    },
});

export default InputPastQuiz;
