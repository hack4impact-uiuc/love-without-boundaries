import { GraphQLObjectType, GraphQLString, GraphQLID , GraphQLList} from 'graphql';
import mongoose from 'mongoose';

import NoteType from './NotesType';

const Lesson = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Schema design for lessons',
  fields() {
    return {
      id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString,
      },
      quiz: {
        type: GraphQLString, //Change to Quiz later
      },
      worksheets: {
        type: GraphQLString,
      },
      notes: {
        type: new GraphQLList(NoteType)
      }
    };
  },
});

export default Lesson;