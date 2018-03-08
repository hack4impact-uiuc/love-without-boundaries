import { GraphQLNonNull, GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLList} from 'graphql';
const mongoose = require('mongoose');
import InputStudentType from './InputStudentType'

const InputTeacherType = new GraphQLInputObjectType({
  name: 'InputTeacher',
  description: 'Self Descriptive',
  fields: {
    teacherName: {
        type: GraphQLString,
    },
    email: {
        type: GraphQLString,
    },
    password: {
        type: GraphQLString,
    },
    listOfStudents: {
        // type: new GraphQLList(InputStudentType),
        type: new GraphQLList(GraphQLString),
    },
  },
});

export default InputTeacherType;