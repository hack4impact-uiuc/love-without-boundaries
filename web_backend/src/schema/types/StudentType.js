import { GraphQLObjectType, GraphQLString } from 'graphql';
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
      Lesson: {
        type: GraphQLString,
      }, 
    };
  },
});

export default Student;
