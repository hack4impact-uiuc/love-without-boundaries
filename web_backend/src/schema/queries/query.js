import { GraphQLObjectType, GraphQLList} from 'graphql';

import Student from '../../models/student';
import StudentType from '../types/StudentType';
import AdminType from '../types/AdminType'
import Admin from '../../models/admin';
import TeacherType from '../types/TeacherType'
import Teacher from '../../models/teacher';

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
      }, 
      teacher: {
        type: new GraphQLList(TeacherType),
        resolve() { 
          return Teacher.find()
        }
      },
      admin: {
        type: new GraphQLList(AdminType),
        resolve() { 
          return Admin.find()
        }
      },
    };
  },
});

export default Query;