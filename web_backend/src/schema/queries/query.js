import { GraphQLObjectType, GraphQLList } from 'graphql';
import StudentType from '../types/StudentType'
import LessonType from '../types/LessonType'
import Student from '../../models/student';
import Lesson from '../../models/lessons'


const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields() {
    return {
      students: {
        type: new GraphQLList(StudentType),
        resolve() { 
          return Student.find()
        }
      },lessons:{
          type: new GraphQLList(LessonType),
          resolve(){
            return Lesson.find()
          }
        }
    };
  },
});

export default Query;
