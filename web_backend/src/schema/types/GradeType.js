
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLInt } from 'graphql';
const mongoose = require('mongoose');

const Grade = new GraphQLObjectType({
  name: 'Grade',
  description: 'Grade received on a quiz',
  fields() {
    return {
      lesson: {
        type: GraphQLString,
      },
      score: {
        type: GraphQLInt,
      }
    };
  },
});

export default Grade;
