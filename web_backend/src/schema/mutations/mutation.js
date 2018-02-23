import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import StudentType from '../types/StudentType'
import Student from '../../models/student';


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { user: { type: GraphQLString }, teacher: { type: GraphQLString }, grades: {
          type: new GraphQLList(Grade)} },
        resolve(root, { name }, ctx) {
          const s = new Student({ type, teacher, grades });
          return s.save()
        } 
      },




    };
  },
});

export default Mutation;
