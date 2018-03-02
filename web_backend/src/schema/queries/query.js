import { GraphQLObjectType, GraphQLList } from 'graphql';
import StudentType from '../types/StudentType'


import Student from '../../models/student';


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
      

    };
  },
});

export default Query;