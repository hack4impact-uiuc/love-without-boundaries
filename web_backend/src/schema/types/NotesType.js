
import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const NoteType = new GraphQLObjectType({
  name: 'Note',
  description: 'Notes on a lesson',
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

export default NoteType
