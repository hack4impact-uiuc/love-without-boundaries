import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Lesson from '../../models/lessons';

import { nodeField, TeacherType, AdminType, StudentType, LessonType } from '../types/Nodes';

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Your Root Query',
    fields() {
        return {
            node: nodeField,
            students: {
                type: new GraphQLList(StudentType),
                resolve() {
                    return Student.find().sort('-date');;
                },
            },
            teachers: {
                type: new GraphQLList(TeacherType),
                resolve() {
                    return Teacher.find().sort('-date');;
                },
            },
            admins: {
                type: new GraphQLList(AdminType),
                resolve() {
                    return Admin.find().sort('-date');;
                },
            },
            lessons: {
                type: new GraphQLList(LessonType),
                resolve() {
                    console.log(Lesson.find())
                    return Lesson.find().sort('-date');;
                },
            },
        };
    },
});

export default Query;
