import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import mongoose from 'mongoose';
import Question from './QuestionType.js'

const Quiz = new GraphQLObjectType({
  name: 'Quiz',
  description: 'Self Descriptive',
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      questions: {
      	type: new GraphQLList(Question)
      },
    };
  },
});

export default Quiz;