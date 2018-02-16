import { GraphQLObjectType, GraphQLString } from 'graphql';
const mongoose = require('mongoose');

const Lesson = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Self Descriptive',
  fields() {
    return {
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