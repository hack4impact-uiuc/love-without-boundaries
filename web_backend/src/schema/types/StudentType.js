import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLList } from 'graphql';
const mongoose = require('mongoose');

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      User: {
        type: GraphQLString,
      },
      Teacher: {
        type: GraphQLString,
      },
      Grades: {
        type: GraphQLList,
      }, 
    };
  },
});

export default Student;
