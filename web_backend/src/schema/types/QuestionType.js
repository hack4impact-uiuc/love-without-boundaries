import { GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
const mongoose = require('mongoose');

const Question = new GraphQLObjectType({
  name: 'Question',
  description: 'Self Descriptive',
  fields() {
    return {
      name: {
        type: GraphQLString,
      },
      listofAnswers: {
      	type: GraphQLList(Answer)

      },
    };
  },
});

export default Question;