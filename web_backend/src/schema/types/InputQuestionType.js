import { GraphQLNonNull, GraphQLInputObjectType, GraphQLString, GraphQLList} from 'graphql';
import InputAnswerType from '../types/InputAnswerType';
const mongoose = require('mongoose');

const InputQuestionType = new GraphQLInputObjectType({
  name: 'InputQuestion',
  description: 'Self Descriptive',
  fields: {
    questionName: { type: new GraphQLNonNull(GraphQLString) },
    listofAnswers: { type: new GraphQLNonNull(new GraphQLList(InputAnswerType)) }
  },
});

export default InputQuestionType;