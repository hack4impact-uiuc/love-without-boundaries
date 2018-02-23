import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import StudentType from '../types/StudentType';
import GradeType from '../types/GradeType';


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Your Root Mutation',
 
    return {
        createStudent: {
            type: StudentType,
            args: { 
                user: { type: GraphQLString }, 
                teacher: { type: GraphQLString }, 
                grades: { type: new GraphQLList(GraphQLString)} 
            },
            resolve(root, { user, teacher, grades }, ctx) {
                const s = new Student({ user, teacher, grades });
                return s.save();
            }
        }
  },
});

export default Mutation;
