import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import mongoose from 'mongoose';

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