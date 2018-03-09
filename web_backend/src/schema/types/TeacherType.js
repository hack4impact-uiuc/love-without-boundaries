import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';

// import { nodeInterface, globalId } from '../core'
import mongoose from 'mongoose';
import Student from './StudentType'

const Teacher = new GraphQLObjectType({
  name: 'Teacher',
  description: 'Self Descriptive',
  fields() {
    return {
      // id: globalId('Teacher'),
      name: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString,
      },
      students: {
        description: 'Students that the teacher teachers',
        type: new GraphQLList(Student),
        resolve(teacher) {
          return Student.find({_id: {"$in": teacher.listOfStudentIDs}});
        }
      }
    };
  },
  // interfaces: [nodeInterface]
});

export default Teacher;