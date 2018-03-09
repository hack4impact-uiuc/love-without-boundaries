import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import mongoose from 'mongoose';

import { nodeInterface, globalId } from '../core'

const Admin = new GraphQLObjectType({
  name: 'Admin',
  description: 'Self Descriptive',
  fields() {
    return {
      id: globalId('Admin'),
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    };
    interfaces: [nodeInterface]
  },
});

export default Admin;