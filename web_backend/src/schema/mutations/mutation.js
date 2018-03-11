import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';

import StudentType from '../types/StudentType';
import Student from '../../models/student';
import LessonType from '../types/LessonType';
import Lesson from '../../models/lessons';

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
          name: {type: GraphQLString }, 
          quiz: { type: GraphQLString }, 
          worksheetName: { type: GraphQLString}, 
          worksheetURL: { type: GraphQLString},
          notesName: {type: GraphQLString},
          notesURL: {type: GraphQLString},
        },
        resolve(root, { name, quiz, worksheetName, worksheetURL, notesName, notesURL}, ctx) {
          const s = new Lesson({name, quiz, worksheetName, worksheetURL, notesName, notesURL})
          return s.save()
        }
      },
      deleteLesson: { 
        type: LessonType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return Lesson.findByIdAndRemove(id);
        }
      },
      addNote: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
          name: {type: GraphQLString},
          url: {type: GraphQLString}  
        },
        resolve(root, { id, name, url}, ctx) {
          return Lesson.findByIdAndUpdate(id, {$set: {"notesName" : name, "notesURL" : url}})
        }
      },
      deleteNote: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
        },
        resolve(root, {id}) {
          return Lesson.findByIdAndUpdate(id, {$set: {"notesName" : null, "notesURL" : null}})
        }
      },
      addWorksheet: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
          name: {type: GraphQLString},
          url: {type: GraphQLString} 
        },
        resolve(root, { id, name, url}, ctx) {
          return Lesson.findByIdAndUpdate(id, {$set: {"worksheetName": name, "worksheetURL": url}})
        }
      },
      deleteWorksheet: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
        },
        resolve(root, {id}) {
          return Lesson.findByIdAndUpdate(id, {$set: {"worksheetName" : null, "worksheetURL" : null}})
        }
      },
    };
  },
});

export default Mutation;
