import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
const mongoose = require('mongoose');

const Lesson = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Self Descriptive',
  fields() {
    return {
      id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString,
      },
      quiz: {
        type: GraphQLString, //Change to Quiz later
      },
      worksheets: {
        type: GraphQLString,
      },
      notes: {
        type: GraphQLString
      }
    };
  },
});

export default Lesson;