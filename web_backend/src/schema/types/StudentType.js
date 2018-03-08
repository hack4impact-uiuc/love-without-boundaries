import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import Grade from './GradeType'
import Teacher from './TeacherType'

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      teacherID: {
        type: GraphQLString,
      },
      grades: {
        type: new GraphQLList(Grade)
      }
    };
  },
});

export default Student;