import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import InputQuestion from './InputQuestionType.js'

const InputQuiz = new GraphQLInputObjectType({
  name: 'InputQuiz',
  description: 'Self Descriptive',
  fields() {
    return {
        name: {
            type: GraphQLString,
        },
        questions: {
            type: new GraphQLList(InputQuestion)
        },
        lessonID: { type: GraphQLString }
    };
  },
});

export default InputQuiz;