import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt } from 'graphql';
import mongoose from 'mongoose';
import InputSubmittedAnswer from './InputSubmittedAnswerType.js'

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