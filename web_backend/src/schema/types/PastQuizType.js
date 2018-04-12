import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat, GraphQLID } from 'graphql';
import SubmittedAnswer from './SubmittedAnswerType';

const PastQuiz = new GraphQLObjectType({
    name: 'PastQuiz',
    description: 'Self Descriptive',
    fields() {
        return {
            lessonID: { type: GraphQLID },
            quizName: { type: GraphQLString },
            score: { type: GraphQLFloat },
            submittedAnswers: {
                type: new GraphQLList(SubmittedAnswer),
            },
        };
    },
});

export default PastQuiz;
