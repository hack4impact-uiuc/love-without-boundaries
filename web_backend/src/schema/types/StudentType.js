import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import Grade from '../types/GradeType.js';
const mongoose = require('mongoose');

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      user: {
        type: GraphQLString,
      },
      teacher: {
        type: GraphQLString,
      },
      grades: {
        type: new GraphQLList(Grade)
      }, 
    };
  },
});

export default Student;
