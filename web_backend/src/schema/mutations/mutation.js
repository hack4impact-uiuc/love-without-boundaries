import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } from 'graphql';
import InputQuestionType from '../types/InputQuestionType';
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import InputQuizType from '../types/InputQuizType';
import Lesson from '../../models/lessons';
import { TeacherType, AdminType, StudentType, LessonType } from '../types/Nodes';
import AnsweredQuestionsType from '../types/AnsweredQuestionsType';

const createStudent = mutationWithClientMutationId({
    name: 'CreateStudent',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        token: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: async ({ name, email, token }) => {
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
        token: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        teacher: {
            type: TeacherType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: async ({ name, email, token }) => {
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
        token: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        admin: {
            type: AdminType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: async ({ name, email, token }) => {
        const a = new Admin({ name, email });
        return a.save();
    },
});

const createLesson = mutationWithClientMutationId({
    name: 'CreateLesson',
    inputFields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        quiz: { type: InputQuizType },
        worksheetURL: { type: GraphQLString },
        notesURL: { type: GraphQLString },
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: async ({
        name, quiz, worksheetURL, notesURL,
    }) => {
        const l = new Lesson({
            name, quiz, worksheetURL, notesURL,
        });
        return l.save();
    },
});

const deleteAdmin = mutationWithClientMutationId({
    name: 'DeleteAdmin',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
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
        id: { type: new GraphQLNonNull(GraphQLString) },
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
        return Student.findOneAndUpdate({ _id: obj.id }, { $push: { grades: grade } }, { new: true });
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
    },
    mutateAndGetPayload: async ({ studentID, teacherID }) => {
        const realStudentId = await Student.findById(fromGlobalId(studentID).id) !== null;
        const realTeacherId = await Teacher.findById(fromGlobalId(teacherID).id) !== null;
        if (realStudentId && realTeacherId) {
            await Student.findByIdAndUpdate(fromGlobalId(studentID).id, { $set: { teacherID: fromGlobalId(teacherID).id } }, { new: true });
            await Teacher.findByIdAndUpdate(fromGlobalId(teacherID).id, { $push: { listOfStudentIDs: fromGlobalId(studentID).id } });
        }
        return Student.findById(fromGlobalId(studentID).id) && Teacher.findById(fromGlobalId(teacherID).id);
    },
});

const deleteTeacher = mutationWithClientMutationId({
    name: 'DeleteTeacher',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
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

const submitQuiz = mutationWithClientMutationId({
    name: 'SubmitQuiz',
    inputFields: {
        id: { type: GraphQLString },
        lessonID: { type: GraphQLString },
        answeredQuestions: { type: AnsweredQuestionsType },
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
    mutateAndGetPayload: async ({
        id, lessonID, answeredQuestions,
    }) => {
        const questions = [];
        answeredQuestions.submissions.forEach(q => questions.push(q.questionID));
        const answers = [];
        answeredQuestions.submissions.forEach(q => answers.push(q.answerChosen));

        const sObj = fromGlobalId(id);
        const lObj = fromGlobalId(lessonID);
        const q1 = await Lesson.findById(lObj.id).exec();
        const questionIDs = q1.quiz.questions.map(q => q.id);
        if (questionIDs.length < 0) {
            return;
        }
        // const answerNames = q1.quiz.questions.map(q => q.answers.map(a => [a.answerName, a.isCorrect]));
        let numCorrect = 0;
        questions.forEach((q, i) => {
            let isCorrect = true;
            const indexOfQuestion = questionIDs.reduce((a, e, i) => { if (e === q) a.push(i); return a; }, []);
            q1.quiz.questions[indexOfQuestion[0]].answers.map(a => ((a.isCorrect) ? isCorrect = isCorrect && (a.answerName == answers[i]) : null));
            numCorrect += isCorrect;
        });
        const submittedAnswers = [];
        q1.quiz.questions.forEach((q, i) => {
            const indexOfAnswer = (questions.findIndex(element => element === q._id));
            if (indexOfAnswer != -1) {
                submittedAnswers.push({ questionID: q._id, answerChosen: answers[i] });
            } else {
                submittedAnswers.push({ questionID: q._id, answerChosen: answers[i] });
            }
        });
        const newTopScore = (numCorrect / questionIDs.length) * 100;
        const s1 = await Student.findById(sObj.id);
        const lessonGrade = s1.grades.find(elem => elem.lessonID === lessonID);
        const newEntry = { score: newTopScore, lessonID };
        if (lessonGrade === undefined) {
            await Student.findByIdAndUpdate(sObj.id, { $push: { grades: newEntry } });
        } else if (newTopScore > lessonGrade.score) {
            const newGrades = s1.grades.filter(s => s.score !== lessonGrade.score && s.lessonID !== lessonID);
            newGrades.push(newEntry);
            await Student.findByIdAndUpdate(sObj.id, { $set: { grades: newGrades } }, { new: true });
        }
        const pastQuiz = {
            lessonID,
            quizName: q1.name,
            score: (numCorrect / questionIDs.length),
            submittedAnswers,
        };
        return Student.findByIdAndUpdate(sObj.id, { $push: { pastQuizzes: pastQuiz }, $set: { topScore: newTopScore } });
    },
});
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
        id: { type: new GraphQLNonNull(GraphQLString) },
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
        id: { type: GraphQLString },
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
        id: { type: GraphQLString },
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
        id: { type: GraphQLString },
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
        id: { type: GraphQLString },
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
        studentID: { type: GraphQLString },
        lessonID: { type: GraphQLString },
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

const deleteStudent = mutationWithClientMutationId({
    name: 'DeleteStudent',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        student: {
            type: StudentType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: ({ id }) => {
        const obj = fromGlobalId(id);
        return Student.findByIdAndRemove(obj.id);
    },
});

const addURL = mutationWithClientMutationId({
    name: 'AddURL',
    inputFields: {
        id: { type: GraphQLString },
        url: { type: GraphQLString },
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
    mutateAndGetPayload: ({ id, url }) => {
        const obj = fromGlobalId(id);
        return Student.findByIdAndUpdate(obj.id, { $set: { URL: url } }, { new: true });
    },
});

const deleteQuestion = mutationWithClientMutationId({
    name: 'deleteQuestion',
    inputFields: {
        questionId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        lessonId: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        lesson: {
            type: LessonType,
            resolve: payload => payload,
        },
    },
    mutateAndGetPayload: async ({ questionId, lessonId }) => {
        const lObj = fromGlobalId(lessonId);
        return Lesson.findByIdAndUpdate(lObj.id, { $pull: { 'quiz.questions': { _id: questionId } } });
    },
});

const editLesson = mutationWithClientMutationId({
    name: 'EditLesson',
    inputFields: {
        id: { type: GraphQLString },
        newName: { type: GraphQLString },
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
    mutateAndGetPayload: ({ id, newName }) => {
        const obj = fromGlobalId(id);
        return Lesson.findByIdAndUpdate(obj.id, { $set: { name: newName } });
    },
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
            deleteTeacher,
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
            removeStudentWorksheetCopy,
            deleteStudent,
            addURL,
            deleteQuestion,
            editLesson,
        };
    },
});

export default Mutation;
