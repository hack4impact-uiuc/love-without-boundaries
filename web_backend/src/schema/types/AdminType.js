import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
const mongoose = require('mongoose');

const Admin = new GraphQLObjectType({
  name: 'Admin',
  description: 'Self Descriptive',
  fields() {
    return {
      adminName: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      }
    };
  },
});

export default Admin;