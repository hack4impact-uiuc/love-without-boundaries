import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import GradeType from '../types/GradeType'
import StudentType from '../types/StudentType'
import Student from '../../models/student';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString },  teacher: { type: GraphQLString } },
        resolve(root, { name, teacher}, ctx) {
          const s = new Student({ name, teacher });
          return s.save()
        } 
      },
      addGrade: {
        type: StudentType,
        args: { name: { type: GraphQLString }, lesson: { type: GraphQLString }, score: { type: GraphQLInt } },
        resolve(root, { name, lesson, score}, ctx) {
          var grade = {"lesson": lesson, "score": score};
          return Student.findOneAndUpdate({"name": name}, {$push: {"grades": grade}})
        } 
      }
    };
  },
});

export default Mutation;
