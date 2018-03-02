import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
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
      	type: new GraphQLList(QuestionType),
      },
    };
  },
});

export default Quiz;