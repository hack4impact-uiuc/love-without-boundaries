import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import Answer from './AnswerType'

const Question = new GraphQLObjectType({
  name: 'Question',
  description: 'Self Descriptive',
  fields() {
    return {
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