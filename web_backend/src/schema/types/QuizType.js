import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import Question from './QuestionType';

const Quiz = new GraphQLObjectType({
  name: 'Quiz',
  description: 'Self Descriptive',
  fields() {
    return {
        name: { 
            type: GraphQLString 
        },
        questions: { 
            type: new GraphQLList(Question) 
        }
    };
  },
});

export default Quiz;