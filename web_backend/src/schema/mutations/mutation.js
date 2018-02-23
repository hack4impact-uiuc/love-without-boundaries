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
        args: { name: { type: GraphQLString } },
        resolve(root, { name }, ctx) {
          const s = new Student({ name });
          return s.save()
        } 
      },
      addGrade: {
        type: StudentType,
        args: { user: { type: GraphQLString }, lesson: { type: GraphQLString }, score: { type: GraphQLInt } },
        resolve(root, { user, lesson, score}, ctx) {
          return Student.findOne({ "user": user }, function (err, u){
            u.grades.lesson = lesson;
            u.grades.score = score;
            u.save();
          });


        } 

      }



    };
  },
});

export default Mutation;
