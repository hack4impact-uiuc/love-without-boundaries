import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');
import Student from './StudentType'

const Teacher = new GraphQLObjectType({
  name: 'Teacher',
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
      listOfStudentIDs: {
        type: new GraphQLList(GraphQLString)
      }
    };
  },
});

export default Teacher;