import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } from 'graphql';
import SubmittedAnswer from './SubmittedAnswerType';

const PastQuiz = new GraphQLObjectType({
    name: 'PastQuiz',
    description: 'Previously submitted quizzes',
    fields() {
        return {
            lessonID: {
                type: GraphQLString,
                description: 'id of the lesson the quiz was from',
            },
            quizName: {
                type: GraphQLString,
                description: 'The name of the quiz',
            },
            score: {
                type: GraphQLFloat,
                description: 'The score the student received from submitting the quiz',
            },
            submittedAnswers: {
                type: new GraphQLList(SubmittedAnswer),
                description: 'The record of answers the student submitted',
            },
        };
    },
});

export default PastQuiz;
