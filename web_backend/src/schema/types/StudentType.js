import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');
import Grade from './GradeType'

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      studentName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      teacher: {
        type: GraphQLString,
      },
      grades: {
        type: new GraphQLList(Grade)
      }
      };
    },
});

export default Student;