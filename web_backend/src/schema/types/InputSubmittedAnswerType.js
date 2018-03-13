import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

const InputSubmittedAnswer = new GraphQLInputObjectType({
  name: 'InputSubmittedAnswer',
  description: 'Self Descriptive',
  fields() {
    return {
        questionID: { type: GraphQLString },
        answerChosen: { type: GraphQLString },
        correctAnswer: { type: GraphQLString }
    };
  },
});

export default InputSubmittedAnswer;