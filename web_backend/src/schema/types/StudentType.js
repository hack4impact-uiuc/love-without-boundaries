import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');
import Grade from './GradeType'
import Teacher from './TeacherType'

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      studentID: {
        type: GraphQLID,
      },
      studentName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      password: {
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