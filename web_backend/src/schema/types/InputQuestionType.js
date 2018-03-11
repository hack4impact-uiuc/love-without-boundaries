import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import InputAnswer from './InputAnswerType.js'

const InputQuestion = new GraphQLInputObjectType({
  name: 'InputQuestion',
  description: 'Self Descriptive',
  fields() {
    return {
      questionName: {
        type: GraphQLString,
      },
      answers: {
      	type: new GraphQLList(InputAnswer),
      },
    };
  },
});

export default InputQuestion;