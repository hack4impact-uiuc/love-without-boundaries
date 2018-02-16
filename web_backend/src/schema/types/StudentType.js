import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import Grade from '../types/GradeType.js';
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
        type: new GraphQLList(Grade)
      }, 
    };
  },
});

export default Student;
