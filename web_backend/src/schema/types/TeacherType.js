import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');
import Student from './StudentType'

const Teacher = new GraphQLObjectType({
  name: 'Teacher',
  description: 'Self Descriptive',
  fields() {
    return {
      teacherID: {
        type: GraphQLID,
      },
      teacherName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      listOfStudentIDs: {
        type: new GraphQLList(GraphQLString)
      }
    };
  },
});

export default Teacher;