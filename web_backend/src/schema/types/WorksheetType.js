import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import mongoose from 'mongoose';

const Worksheet = new GraphQLObjectType({
  name: 'Worksheet',
  description: 'Worksheet attached to a lesson',
  fields() {
    return {
      lessonID: {
        type: GraphQLString,
      },
      url: {
        type: GraphQLString,
      }
    };
  },
});

export default Worksheet;