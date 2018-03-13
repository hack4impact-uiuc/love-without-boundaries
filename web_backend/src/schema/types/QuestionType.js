import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';
import mongoose from 'mongoose';
import Answer from './AnswerType'

const Question = new GraphQLObjectType({
  name: 'Question',
  description: 'Self Descriptive',
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      questionName: {
        type: GraphQLString,
      },
      answers: {
      	type: new GraphQLList(Answer),
      },
    };
  },
});

export default Question;