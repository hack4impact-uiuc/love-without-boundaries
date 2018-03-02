import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

import StudentType from '../types/StudentType'
import Student from '../../models/student';

import AnswerType from '../types/StudentType'
import Answer from '../../models/student';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString } },
        resolve(root, { name }, ctx) {
          const s = new Student({ name });
          return s.save()
        } 
      },
      createAnswer: {
        type: AnswerType,
        args: { answerName: { type: GraphQLString } , isCorrect: {type: GraphQLBoolean}},
        resolve(root, { answerName, isCorrect }, ctx) {
          const s = new Answer({ answerName, isCorrect });
          return s.save()
        } 
      },




    };
  },
});

export default Mutation;
