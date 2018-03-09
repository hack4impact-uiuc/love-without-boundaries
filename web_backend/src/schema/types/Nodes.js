import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import { nodeDefinitions, globalIdField, fromGlobalId } from 'graphql-relay'
import mongoose from 'mongoose';

import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';

import GradeType from './GradeType';

const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        const {type, id} = fromGlobalId(globalId);
        let collection;
        switch (type) {
            case 'Admin':
                collection = Admin;
                break;
            case 'Student':
                collection = Student;
                break;
            case 'Teacher':
                collection = Teacher;
                break;
        }
        return collection.findById(id);
    },
    (obj) => {
        if(obj.grades) return StudentType;
        if(obj.listOfStudentIDs) return TeacherType;
        return AdminType;
    }
);

const globalId = mongoModelName => globalIdField(mongoModelName, obj => obj._id);

const StudentType = new GraphQLObjectType({
  name: 'Student',
  description: 'Self Descriptive',
  fields() {
    return {
      id: globalId('Student'),
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      teacher: {
        type: TeacherType,
        resolve: student => {
          return Teacher.findOne({listOfStudentIDs: student._id})
        }
      },
      grades: {
        type: new GraphQLList(GradeType)
      },
    };
  },
  interfaces: [nodeInterface]
});

const TeacherType = new GraphQLObjectType({
  name: 'Teacher',
  description: 'Teacher',
  fields() {
    return {
      id: globalId('Teacher'),
      name: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString,
      },
      students: {
        description: 'Students that the teacher teachers',
        type: new GraphQLList(StudentType),
        resolve(teacher) {
          return Student.find({_id: {"$in": teacher.listOfStudentIDs}});
        }
      }
    };
  },
  interfaces: [nodeInterface]
});

const AdminType = new GraphQLObjectType({
  name: 'Admin',
  description: 'Administrator',
  fields() {
    return {
      id: globalId('Admin'),
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    };
    interfaces: [nodeInterface]
  },
});

export { AdminType, TeacherType, StudentType, nodeField };
