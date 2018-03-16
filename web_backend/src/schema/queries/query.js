import { GraphQLObjectType, GraphQLList} from 'graphql';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Quiz from '../../models/quiz';
import Lesson from '../../models/lessons'

import { nodeField, TeacherType, AdminType, StudentType, LessonType, QuizType } from '../types/Nodes'

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields() {
    return {
      node: nodeField,
      students: {
        type: new GraphQLList(StudentType),
        resolve() { 
          return Student.find()
        }
      }, 
      teachers: {
        type: new GraphQLList(TeacherType),
        resolve() {
          return Teacher.find()
        }
      },
      admins: {
        type: new GraphQLList(AdminType),
        resolve() { 
          return Admin.find()
        }
      }, 
      lessons: {
          type: new GraphQLList(LessonType),
          resolve(){
            return Lesson.find()
          }
      }, 
      // quiz: {
      //   type: new GraphQLList(QuizType),
      //   resolve() { 
      //     return Quiz.find()
      //   }
      // },
    };
  },
});

export default Query;