import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Quiz from '../../models/quiz';
import Lesson from '../../models/lessons';

import { nodeField, TeacherType, AdminType, StudentType, LessonType, QuizType } from '../types/Nodes';
import { nodeDefinitions, globalIdField, fromGlobalId } from 'graphql-relay'

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Your Root Query',
    fields() {
        return {
            node: nodeField,
            students: {
                type: new GraphQLList(StudentType),
                resolve() {
                    return Student.find();
                },
            },
            teachers: {
                type: new GraphQLList(TeacherType),
                resolve() {
                    return Teacher.find();
                },
            },
            admins: {
                type: new GraphQLList(AdminType),
                resolve() {
                    return Admin.find();
                },
            },
            // lessons: {
            //     type: new GraphQLList(LessonType),
            //     resolve(){
            //       return Lesson.find()
            //     }
            // },
            lessons: {
                type: new GraphQLList(LessonType),

                // define the arguments and their types here
                args: {
                    id: { type: GraphQLString },
                },

                resolve(rootValue, args, info) {
                    const fields = {};
                    // and now you can check what the arguments' values are
                    if (args.id) {
                        fields.id = args.id;
                    }
                    // and use it when constructing the query
                    const { id } = fromGlobalId(fields.id);
                    return [Lesson.findById(id)];
                },
            },
            quiz: {
                type: new GraphQLList(QuizType),
                resolve() {
                    return Quiz.find();
                },
            },
        };
    },
});

export default Query;
