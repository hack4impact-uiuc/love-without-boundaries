import { GraphQLObjectType, GraphQLList} from 'graphql';

import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';

import { nodeField, TeacherType, AdminType, StudentType } from '../types/Nodes'

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
    };
  },
});

export default Query;