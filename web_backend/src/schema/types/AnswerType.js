import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLBoolean} from 'graphql';
const mongoose = require('mongoose');

const Answer = new GraphQLObjectType({
  name: 'Answer',
  description: 'Self Descriptive',
  fields() {
    return {
      answerName: {
        type: GraphQLString,
      },
      isCorrect: {
      	type: GraphQLBoolean,
      },
    };
  },
});

export default Answer;