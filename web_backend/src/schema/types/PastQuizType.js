import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import SubmittedAnswer from './SubmittedAnswerType';

const PastQuiz = new GraphQLObjectType({
    name: 'PastQuiz',
    description: 'Self Descriptive',
    fields() {
        return {
            quizName: { type: GraphQLString },
            score: { type: GraphQLInt },
            submittedAnswers: {
                type: new GraphQLList(SubmittedAnswer),
            },
        };
    },
});

export default PastQuiz;
