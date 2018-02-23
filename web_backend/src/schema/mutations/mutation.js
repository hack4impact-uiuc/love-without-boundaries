import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID } from 'graphql';

import StudentType from '../types/StudentType'
import Student from '../../models/student';
import LessonType from '../types/LessonType'
import Lesson from '../../models/lessons'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { 
          name: { type: GraphQLString } 
        },
        resolve(root, { name }, ctx) {
          const s = new Student({ name });
          return s.save()
        } 
      },
      createLesson: {
        type: LessonType,
        args: { 
          id: { type: GraphQLID}, 
          name: {type: GraphQLString}, 
          quiz: { type: GraphQLString}, 
          worksheets: { type: GraphQLString}, 
          notes: { type: GraphQLString}
        },
        resolve(root, { id, name, quiz, worksheets, notes}, ctx) {
          const s = new Lesson({name, quiz, worksheets, notes})
          return s.save()
        }
      },
      deleteLesson: {
        type: LessonType,
        args: { 
          id: {type: new GraphQLNonNull(GraphQLID)}
        },
        resolve(root, {id}, ctx){
          return lessons.delete(id)
        }
      },



    };
  },
});

export default Mutation;
