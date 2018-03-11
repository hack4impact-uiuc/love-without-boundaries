import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

const InputAnswer = new GraphQLInputObjectType({
  name: 'InputAnswer',
  description: 'Self Descriptive',
  fields() {
    return {
        answerName: { type: GraphQLString },
        isCorrect: { type: GraphQLBoolean }
    };
  },
});

export default InputAnswer;