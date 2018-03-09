import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

const Answer = new GraphQLObjectType({
  name: 'Answer',
  description: 'Self Descriptive',
  fields() {
    return {
        answerName: { type: GraphQLString },
        isCorrect: { type: GraphQLBoolean }
    };
  },
});

export default Answer;