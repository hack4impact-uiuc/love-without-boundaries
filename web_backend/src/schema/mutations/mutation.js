import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import InputQuestionType from '../types/InputQuestionType';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import InputQuizType from '../types/InputQuizType';
import Lesson from '../../models/lessons';
import { TeacherType, AdminType, StudentType, LessonType } from '../types/Nodes';
import InputPastQuizType from '../types/InputPastQuizType';
import SubmittedAnswerType from '../types/SubmittedAnswerType';

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
        lesson: {
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
        admin: {
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
        const obj = fromGlobalId(id);
        const grade = { lesson, score };
        return Student.findOneAndUpdate({ _id: obj.id }, { $push: { grades: grade } });
    },
});

// ID's are broken they become the same thing somehow.
const assignStudentToTeacher = mutationWithClientMutationId({
    name: 'AssignStudentToTeacher',
    inputFields: {
        studentID: { type: GraphQLID },
        teacherID: { type: GraphQLID },
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
        const sObj = fromGlobalId(studentID);
        const tObj = fromGlobalId(teacherID);
        if (Student.findById(sObj.id) && Teacher.findById(tObj.id)) {
            return Student.findByIdAndUpdate(sObj.id, { $set: { teacherID } })
              && Teacher.findByIdAndUpdate(tObj.id, { $push: { listOfStudentIDs: studentID } });
        }
        return null;
    },
});

const deleteTeacher = mutationWithClientMutationId({
    name: 'DeleteTeacher',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        teacher: {
            type: TeacherType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Teacher.findByIdAndRemove(obj.id);
    },
});

// DOESNT WORK
const submitQuiz = mutationWithClientMutationId({
    name: 'SubmitQuiz',
    inputFields: {
        id: { type: GraphQLID },
        lessonID: { type: GraphQLID },
        questions: { type: new GraphQLList(GraphQLString) },
        answers: { type: new GraphQLList(GraphQLString) },
    },
    student: {
        type: StudentType,
        resolve: payload => payload,
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({
        id, lessonID, questions, answers,
    }) => {
        const sObj = fromGlobalId(id);
        const lObj = fromGlobalId(lessonID);
        const q1 = Lesson.findById(lObj.id, 'name');
        const quizName = q1.name;
        let score = 0;
        let submittedAnswers = [];
        for (let i = 0; i < questions.length; i += 1) {
            const q = q1.questions.find({ questionName: questions[i] });
            const question = answers[i];
            const qid = q.id;
            const a = q.answers.find({ answerName: answers[i] });
            const correctA = q.answers.find({ isCorrect: true });
            if (a.isCorrect) {
                score += 1;
            }
            submittedAnswers.push({ qid, question, correctA });
        }
        const pastQuiz = { quizName, score, submittedAnswers };
        Student.findByIdAndUpdate(sObj.id, { $push: { pastQuizzes: pastQuiz } });
    },
});

// Same issue as submitQuiz
const addQuestion = mutationWithClientMutationId({
    name: 'AddQuestion',
    inputFields: {
        question: { type: InputQuestionType },
        lessonId: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ question, lessonId }) => {
        const obj = fromGlobalId(lessonId);
        return Lesson.findByIdAndUpdate(obj.id, { $push: { 'quiz.questions': question } }, { new: true });
    },
});

const deleteLesson = mutationWithClientMutationId({
    name: 'DeleteLesson',
    inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndRemove(obj.id);
    },
});

const addNote = mutationWithClientMutationId({
    name: 'AddNote',
    inputFields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id, name, url }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { notesName: name, notesURL: url } });
    },
});

const deleteNote = mutationWithClientMutationId({
    name: 'DeleteNote',
    inputFields: {
        id: { type: GraphQLID },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { notesName: null, notesURL: null } });
    },
});

const addWorksheet = mutationWithClientMutationId({
    name: 'AddWorksheet',
    inputFields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id, name, url }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { worksheetName: name, worksheetURL: url } });
    },
});

const deleteWorksheet = mutationWithClientMutationId({
    name: 'DeleteWorksheet',
    inputFields: {
        id: { type: GraphQLID },
    },
    lesson: {
        type: LessonType,
        resolve: payload => payload,
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { worksheetName: null, worksheetURL: null } });
    },
});

const addStudentWorksheetCopy = mutationWithClientMutationId({
    name: 'AddStudentWorksheetCopy',
    inputFields: {
        studentID: { type: GraphQLID },
        lessonID: { type: GraphQLID },
        url: { type: GraphQLString },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ studentID, lessonID, url }) => {
        const worksheet = { lessonID, url };
        return Student.findByIdAndUpdate(
            fromGlobalId(studentID).id,
            { $push: { worksheets: worksheet } },
        );
    },
});

const removeStudentWorksheetCopy = mutationWithClientMutationId({
    type: StudentType,
    inputFields: {
        studentID: { type: GraphQLString },
        lessonID: { type: GraphQLString },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ studentID, lessonID }) =>
        Student.findByIdAndUpdate(
            fromGlobalId(studentID).id,
            { $pull: { worksheets: { lessonID } } },
        ),
});

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
            deleteTeacher,
            submitQuiz,
            addQuestion,
            createLesson,
            deleteLesson,
            addNote,
            deleteNote,
            addWorksheet,
            deleteWorksheet,
            addStudentWorksheetCopy,
            removeStudentWorksheetCopy,
        };
    },
});

export default Mutation;
