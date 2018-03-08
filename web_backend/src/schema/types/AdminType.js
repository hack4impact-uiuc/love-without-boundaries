import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import mongoose from 'mongoose';

const Admin = new GraphQLObjectType({
  name: 'Admin',
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
    };
  },
});

export default Admin;