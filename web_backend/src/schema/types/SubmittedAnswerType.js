import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

const SubmittedAnswer = new GraphQLObjectType({
  name: 'SubmittedAnswer',
  description: 'Self Descriptive',
  fields() {
    return {
        questionID: { type: GraphQLString },
        answerChosen: { type: GraphQLString },
        correctAnswer: { type: GraphQLString }
    };
  },
});

export default SubmittedAnswer;