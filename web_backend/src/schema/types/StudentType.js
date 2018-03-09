import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

import { nodeInterface, globalId } from '../core'
import Grade from './GradeType'
import Teacher from './TeacherType'

const Student = new GraphQLObjectType({
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
        type: Teacher,
        resolve: student => {
          return Teacher.findById(student.teacherID)
        }
      },
      grades: {
        type: new GraphQLList(Grade)
      },
    };
  },
  interfaces: [nodeInterface]
});

export default Student;