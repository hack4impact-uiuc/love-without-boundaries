import { GraphQLObjectType, GraphQLString, GraphQLID , GraphQLList} from 'graphql';
import mongoose from 'mongoose';


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
      worksheetName: {
        type: GraphQLString,
      },
      worksheetURL: {
        type: GraphQLString
      },
      notesName: {
        type: GraphQLString,
      },
      notesURL: {
        type: GraphQLString,
      },
    };
  },
});

export default Lesson;