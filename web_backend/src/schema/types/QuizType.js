import { GraphQLObjectType, GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import QuestionType from '../types/QuestionType';
const mongoose = require('mongoose');

const Quiz = new GraphQLObjectType({
  name: 'Quiz',
  description: 'Self Descriptive',
  fields() {
    return {
      quizName: {
        type: GraphQLString,
      },
      listOfQuestions: {
      	type: new GraphQLNonNull(new GraphQLList(QuestionType)),
      },
    };
  },
});

export default Quiz;