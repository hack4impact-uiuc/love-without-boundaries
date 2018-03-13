import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt } from 'graphql';
import mongoose from 'mongoose';
import SubmittedAnswer from './SubmittedAnswerType.js'

const PastQuiz = new GraphQLObjectType({
  name: 'PastQuiz',
  description: 'Self Descriptive',
  fields() {
    return {
        quizName: { type: GraphQLString },
        score: { type: GraphQLInt },
        questions: {
            type: new GraphQLList(SubmittedAnswer),
        },
    };
  },
});

export default PastQuiz;