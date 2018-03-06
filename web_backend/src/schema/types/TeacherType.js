import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');
import Student from './StudentType'

const Teacher = new GraphQLObjectType({
  name: 'Teacher',
  description: 'Self Descriptive',
  fields() {
    return {
      teacherName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      listOfStudents: {
        type: new GraphQLList(Student)
      }
    };
  },
});

export default Teacher;