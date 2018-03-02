import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');

const Quiz = new GraphQLObjectType({
  name: 'Quiz',
  description: 'Self Descriptive',
  fields() {
    return {
      name: {
        type: GraphQLString,
      },
      listOfQuestions: {
      	type: GraphQLList(Question),
      },
    };
  },
});

export default Quiz;