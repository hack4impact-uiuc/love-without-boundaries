import { GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean, GraphQLList } from 'graphql';


import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import GradeType from '../types/GradeType'
import StudentType from '../types/StudentType'
import Student from '../../models/student';
import AdminType from '../types/AdminType'
import Admin from '../../models/admin';
import TeacherType from '../types/TeacherType'
import Teacher from '../../models/teacher';
import teacher from '../../models/teacher';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString }, email: { type: GraphQLString } },//,  teacher: { type: InputTeacherType } },
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
      // linkTeacherStudent: {
      //   type: StudentType,
      //   args: { studentID: { type: GraphQLString }, teacherID: { type: GraphQLString } },
      //   resolve(root, { studentID, teacherID }, ctx) {
      //     Teacher.findOneAndUpdate({"teacherID": teacherID}, {$push: {"listOfStudentIDs": studentID}})
      //     return Student.findOneAndUpdate({"studentID": studentID}, {$push: {"teacherID": teacherID}})
      //   } 
      // },
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
      deleteStudent: { 
        type: StudentType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return students.delete(id)
        }
      },
      deleteTeacher: { 
        type: TeacherType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return teachers.delete(id)
        }
      },
      deleteAdmin: { 
        type: AdminType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return admins.delete(id)
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
        args: {studentID: {type: GraphQLString}, teacherID: {type: GraphQLString}}, 
        resolve(root, {studentID, teacherID}, ctx) {
        if (Student.findById(studentID) && Teacher.findById(teacherID)) {
          Teacher.findByIdAndUpdate(teacherID, {$push: {listOfStudentIDs: studentID}})
          return  Student.findByIdAndUpdate(studentID, {$set: { teacherID: teacherID }})
        }
        }
      }
    };
  },
});

export default Mutation;
