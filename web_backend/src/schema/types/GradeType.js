
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLInt } from 'graphql';
const mongoose = require('mongoose');

const Grade = new GraphQLObjectType({
  name: 'Grade',
  description: 'Self Descriptive',
  fields() {
    return {
      Lesson: {
        type: GraphQLString,
      },
      Score: {
        type: GraphQLInt,
      }
    };
  },
});

export default Grade;
