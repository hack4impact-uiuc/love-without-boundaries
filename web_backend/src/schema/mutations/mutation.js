import { GraphQLObjectType, GraphQLString } from 'graphql';
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
        args: { user: { type: GraphQLString } },
        resolve(root, { user}, ctx) {
          // const s = Student.findOne({"user": user}).update({"grade": {"lesson": "test", "grade" : 100}})
          // const s = new Student({ user, teacher,});
          return Student.findOne({ "user": "aria" }, function (err, u){
            u.grades = new Grade({"lesson": "verbs"});
            u.save();
          });


        } 

      }



    };
  },
});

export default Mutation;
