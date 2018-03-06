import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLList} from 'graphql';
import AnswerType from '../types/AnswerType';
const mongoose = require('mongoose');

const Question = new GraphQLObjectType({
  name: 'Question',
  description: 'Self Descriptive',
  fields() {
    return {
      questionName: {
        type: GraphQLString,
      },
      listofAnswers: {
      	type: new GraphQLList(AnswerType)
      },
    };
  },
});

export default Question;