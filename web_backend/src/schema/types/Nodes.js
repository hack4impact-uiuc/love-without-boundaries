import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } from 'graphql';
import { nodeDefinitions, globalIdField, fromGlobalId } from 'graphql-relay';

import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Lesson from '../../models/lessons';
import QuizType from './QuizType';
import GradeType from './GradeType';
import PastQuizType from './PastQuizType';
import StudentWorksheetType from './StudentWorksheetType';

const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        const { type, id } = fromGlobalId(globalId);
        let collection;
        switch (type) {
        case 'Admin':
            collection = Admin;
            break;
        case 'Student':
            collection = Student;
            break;
        case 'Teacher':
            collection = Teacher;
            break;
        case 'Lesson':
            collection = Lesson;
            break;
        default:
        }
        return collection.findById(id);
    },
    (obj) => {
        if (obj.grades) return StudentType;
        if (obj.listOfStudentIDs) return TeacherType;
        if (obj.worksheetURL) return LessonType;
        return AdminType;
    },
);

const globalId = mongoModelName => globalIdField(mongoModelName, obj => obj._id);

const StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'Self Descriptive',
    fields() {
        return {
            id: globalId('Student'),
            name: {
                type: GraphQLString,
            },
            email: {
                type: GraphQLString,
            },
            teacher: {
                type: TeacherType,
                resolve: student => Teacher.findOne({ '_id': student.teacherID } ),
            },
            grades: {
                type: new GraphQLList(GradeType),
            },
            pastQuizzes: {
                type: new GraphQLList(PastQuizType),
            },
            worksheets: {
                type: new GraphQLList(StudentWorksheetType),
            },
            URL: {
                type: GraphQLString,
            },
            topScore: {
                type: GraphQLFloat,
            },
        };
    },
    interfaces: [nodeInterface],
});

const TeacherType = new GraphQLObjectType({
    name: 'Teacher',
    description: 'Teacher',
    fields() {
        return {
            id: globalId('Teacher'),
            name: {
                type: GraphQLString,
            },
            email: {
                type: GraphQLString,
            },
            students: {
                description: 'Students that the teacher teachers',
                type: new GraphQLList(StudentType),
                async resolve(teacher) {
                    return Student.find({ _id: { $in: teacher.listOfStudentIDs } });
                },
            },
        };
    },
    interfaces: [nodeInterface],
});

const AdminType = new GraphQLObjectType({
    name: 'Admin',
    description: 'Administrator',
    fields() {
        return {
            id: globalId('Admin'),
            name: {
                type: GraphQLString,
            },
            email: {
                type: GraphQLString,
            },
        };
    },
    interfaces: [nodeInterface],
});

const LessonType = new GraphQLObjectType({
    name: 'Lesson',
    description: 'Schema design for lessons',
    fields() {
        return {
            id: globalId('Lesson'),
            name: {
                type: GraphQLString,
            },
            quiz: {
                type: QuizType,
            },
            worksheetName: {
                type: GraphQLString,
            },
            worksheetURL: {
                type: GraphQLString,
            },
            notesName: {
                type: GraphQLString,
            },
            notesURL: {
                type: GraphQLString,
            },
        };
    },
    interfaces: [nodeInterface],
});

export { AdminType, TeacherType, StudentType, LessonType, nodeField };
