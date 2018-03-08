import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const Student = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      name: {
        type: GraphQLString,
      },
    };
  },
});

export default Student;
