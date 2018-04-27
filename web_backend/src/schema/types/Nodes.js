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
                description: 'Student\'s name',
            },
            email: {
                type: GraphQLString,
                description: 'Student\'s email to login with',
            },
            teacher: {
                type: TeacherType,
                description: 'Student\'s teacher that manages them',
                resolve: student => Teacher.findOne({ '_id': student.teacherID } ),
            },
            grades: {
                type: new GraphQLList(GradeType),
                description: 'Student\'s grades for the past lessons',
            },
            pastQuizzes: {
                type: new GraphQLList(PastQuizType),
                description: 'Student\'s past quizzes that they have submitted',
            },
            worksheets: {
                type: new GraphQLList(StudentWorksheetType),
                description: 'URL for student\'s copy of the worksheets of lessons',
            },
            URL: {
                type: GraphQLString,
                description: 'Student\'s empty google doc playground',
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
                description: 'Teacher\'s name',
            },
            email: {
                type: GraphQLString,
                description: 'Teacher\'s email to login with',
            },
            students: {
                description: 'List of the teacher\'s students',
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
                description: 'Admin\'s name',
            },
            email: {
                type: GraphQLString,
                description: 'Admin\'s email to login with',
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
                description: 'Lesson\'s name',
            },
            quiz: {
                type: QuizType,
                description: 'Lesson\'s quiz for the material to be tested on',
            },
            worksheetURL: {
                type: GraphQLString,
                description: 'The URL of the lesson\'s worksheet',
            },
            notesURL: {
                type: GraphQLString,
                description: 'The URL of the lesson\'s notes',
            },
        };
    },
    interfaces: [nodeInterface],
});

export { AdminType, TeacherType, StudentType, LessonType, nodeField };
