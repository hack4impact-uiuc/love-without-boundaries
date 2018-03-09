
import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const WorksheetType = new GraphQLObjectType({
  name: 'Worksheet',
  description: 'Worksheets about a lesson',
  fields() {
    return {
      name: {
          type: GraphQLString
      }, 
      url: {
          type: GraphQLString
      }
    };
  },
});

export default WorksheetType
