import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID } from 'graphql';
import InputQuestionType from '../types/InputQuestionType';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import InputQuizType from '../types/InputQuizType';
import Lesson from '../../models/lessons';
import { TeacherType, AdminType, StudentType, LessonType } from '../types/Nodes';
import InputPastQuizType from '../types/InputPastQuizType';

const createStudent = mutationWithClientMutationId({
    name: 'CreateStudent',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ name, email }) => {
        const s = new Student({ name, email });
        return s.save();
    },
});

const createTeacher = mutationWithClientMutationId({
    name: 'CreateTeacher',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        teacher: {
            type: TeacherType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ name, email }) => {
        const t = new Teacher({ name, email });
        return t.save();
    },
});

const createAdmin = mutationWithClientMutationId({
    name: 'CreateAdmin',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        admin: {
            type: AdminType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ name, email }) => {
        const a = new Admin({ name, email });
        return a.save();
    },
});

const createLesson = mutationWithClientMutationId({
    name: 'CreateLesson',
    inputFields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        quiz: { type: InputQuizType },
        worksheetName: { type: GraphQLString },
        worksheetURL: { type: GraphQLString },
        notesName: { type: GraphQLString },
        notesURL: { type: GraphQLString },
    },
    outputFields: {
        admin: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({
        name, quiz, worksheetName, worksheetURL, notesName, notesURL,
    }) => {
        const l = new Lesson({
            name, quiz, worksheetName, worksheetURL, notesName, notesURL,
        });
        return l.save();
    },
});

const deleteAdmin = mutationWithClientMutationId({
    name: 'DeleteAdmin',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        student: {
            type: AdminType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Admin.findByIdAndRemove(obj.id);
    },
});

const addGrade = mutationWithClientMutationId({
    name: 'AddGrade',
    inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        lesson: { type: GraphQLString },
        score: { type: GraphQLInt },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id, lesson, score }) => {
        const grade = { lesson, score };
        return Student.findOneAndUpdate({ _id: id }, { $push: { grades: grade } });
    },
});

const assignStudentToTeacher = mutationWithClientMutationId({
    name: 'AssignStudentToTeacher',
    inputFields: {
        studentID: { type: GraphQLString },
        teacherID: { type: GraphQLString },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
        teacher: {
            type: TeacherType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ studentID, teacherID }) => {
        if (Student.findById(studentID) && Teacher.findById(teacherID)) {
            return Student.findByIdAndUpdate(studentID, { $set: { teacherID } })
              && Teacher.findByIdAndUpdate(teacherID, { $push: { listOfStudentIDs: studentID } });
        }
        return null;
    },
});

const submitQuiz = mutationWithClientMutationId({
    name: 'SubmitQuiz',
    inputFields: {
        id: { type: GraphQLString },
        pastQuiz: { type: InputPastQuizType },
    },
    student: {
        type: StudentType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id, pastQuiz }) => {
        Student.findByIdAndUpdate(id, { $push: { pastQuizzes: pastQuiz } });
    },
});

const addQuestion = mutationWithClientMutationId({
    name: 'AddQuestion',
    inputFields: {
        id: { type: GraphQLString },
        question: { type: InputQuestionType },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id, question }) => {
        Lesson.findOneAndUpdate({ _id: id }, { $push: { questions: question } });
    },
});

const deleteLesson = mutationWithClientMutationId({
    name: 'DeleteLesson',
    inputFields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndRemove(obj.id);
    },
});

const addNote = mutationWithClientMutationId({
    name: 'AddNote',
    inputFields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id, name, url }) => {
        Lesson.findByIdAndUpdate(id, { $set: { notesName: name, notesURL: url } });
    },
});

const deleteNote = mutationWithClientMutationId({
    name: 'DeleteNote',
    inputFields: {
        id: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { notesName: null, notesURL: null } });
    },
});

const addWorksheet = mutationWithClientMutationId({
    name: 'AddWorksheet',
    inputFields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id, name, url }) => {
        Lesson.findByIdAndUpdate(id, { $set: { worksheetName: name, worksheetURL: url } });
    },
});

const deleteWorksheet = mutationWithClientMutationId({
    name: 'DeleteWorksheet',
    inputFields: {
        id: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { worksheetName: null, worksheetURL: null } });
    },
});

const addStudentWorksheetCopy = mutationWithClientMutationId({
    name: 'AddStudentWorksheetCopy',
    inputFields: {
        studentID: { type: GraphQLString },
        lessonID: { type: GraphQLString },
        url: { type: GraphQLString },
    },
    mutateAndGetPayload: ({ studentID, lessonID, url }) => {
        const worksheet = { lessonID, url };
        return Student.findByIdAndUpdate(
            fromGlobalId(studentID).id,
            { $push: { worksheets: worksheet } },
        );
    },
});
// const removeStudentWorksheetCopy = mutationWithClientMutationId({
//     type: StudentType,
//     inputFields: {
//         studentID: { type: GraphQLString },
//         lessonID: { type: GraphQLString },
//     },
//     resolve(root, { studentID, lessonID  }, ctx) {
//         const worksheet = { lessonID: null, url: null };
//         return Student.findOneAndUpdate({ '_id': studentID }, { $push: { worksheets: worksheet } });
//     },
// });

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Your Root Mutation',
    fields() {
        return {
            createStudent,
            createTeacher,
            createAdmin,
            deleteAdmin,
            addGrade,
            assignStudentToTeacher,
            submitQuiz,
            addQuestion,
            createLesson,
            deleteLesson,
            addNote,
            deleteNote,
            addWorksheet,
            deleteWorksheet,
            addStudentWorksheetCopy,
        };
    },
});

export default Mutation;
