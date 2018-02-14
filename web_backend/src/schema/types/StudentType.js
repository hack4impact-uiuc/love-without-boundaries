import { GraphQLObjectType, GraphQLString } from 'graphql';
const mongoose = require('mongoose');

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      name: {
        type: GraphQLString,
      },
    //   teachers: {
    //     type: GraphQLString
    //   },
    };
  },
});

export default Student;
