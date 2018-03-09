import { GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean, GraphQLList, GraphQLInt } from 'graphql';
import { fromGlobalId } from 'graphql-relay';

import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';

import { nodeField, TeacherType, AdminType, StudentType } from '../types/Nodes'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString }, email: { type: GraphQLString } },
        resolve(root, { name, email}, ctx) {
          const s = new Student({ name, email });
          return s.save()
        } 
      },
      createTeacher: {
        type: TeacherType,
        args: { name: { type: GraphQLString }, 
                email: { type: GraphQLString }
              },
        resolve(root, { name, email }, ctx) {
          const t = new Teacher({ name, email });
          return t.save()
        } 
      },
      createAdmin: {
        type: AdminType,
        args: { name: { type: GraphQLString },
                email: { type: GraphQLString }
              },
        resolve(root, { name, email }, ctx) {
          const a = new Admin({ name, email });
          return a.save()
        } 
      },
      deleteAdmin: { 
        type: AdminType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return Admin.findByIdAndRemove(id);
        }
      },
      addGrade: {
        type: StudentType,
        args: { id: { type: GraphQLString }, lesson: { type: GraphQLString }, score: { type: GraphQLInt } },
        resolve(root, { id, lesson, score}, ctx) {
          var grade = {"lesson": lesson, "score": score};
          return Student.findOneAndUpdate({"_id": id}, {$push: {"grades": grade}})
        } 
      }, 
      assignStudentToTeacher: {
        type: StudentType, 
        args: {
          studentID: {type: GraphQLID},
          teacherID: {type: GraphQLID}
        }, 
        resolve(root, args, ctx) {
          const {id: studentID} = fromGlobalId(args.studentID);
          const {id: teacherID} = fromGlobalId(args.teacherID);
          if (Student.findById(studentID) && Teacher.findById(teacherID)) {
            return Student.findByIdAndUpdate(studentID, {$set: { teacherID }}) && Teacher.findByIdAndUpdate(teacherID, {$push: {"listOfStudentIDs": studentID}})
          }
        }
      }
    };
  },
});

export default Mutation;
