
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLInputObjectType, GraphQLBoolean } from 'graphql';
import AnswerType from '../types/AnswerType'
import GradeType from '../types/GradeType'
import QuestionType from '../types/QuestionType'
import InputAnswerType from '../types/InputAnswerType'
import InputQuestionType from '../types/InputQuestionType'
import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Quiz from '../../models/quiz';
import InputQuizType from '../types/InputQuizType';
import Lesson from '../../models/lessons';
import {  TeacherType, AdminType, StudentType, LessonType, QuizType } from '../types/Nodes';
import Question from '../types/QuestionType';
import InputPastQuizType from '../types/InputPastQuizType';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

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
  mutateAndGetPayload: ({ name, quiz, worksheetName, worksheetURL, notesName, notesURL }) => {
    const l = new Lesson({name, quiz, worksheetName, worksheetURL, notesName, notesURL})
    return l.save()
  },
});

const deleteAdmin = mutationWithClientMutationId({
  name: 'DeleteAdmin',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  mutateAndGetPayload: ({ id }) => {
    const obj = fromGlobalId(id)
    return Admin.findByIdAndRemove(obj.id);
  },
});

const addGrade = mutationWithClientMutationId({
  name: 'AddGrade',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    lesson: { type: GraphQLString }, 
    score: { type: GraphQLInt }
  },
  mutateAndGetPayload: ({ id, lesson, score }) => {
    var grade = {"lesson": lesson, "score": score};
    return Student.findOneAndUpdate({"_id": id}, {$push: {"grades": grade}})
  },
});

const assignStudentToTeacher = mutationWithClientMutationId({
  name: 'AssignStudentToTeacher',
  inputFields: {
    studentID: {type: GraphQLString}, 
    teacherID: {type: GraphQLString}
  },
  mutateAndGetPayload: ({ studentID, teacherID }) => {
    if (Student.findById(studentID) && Teacher.findById(teacherID)) {
      return Student.findByIdAndUpdate(studentID, {$set: { teacherID: teacherID }}) && Teacher.findByIdAndUpdate(teacherID, {$push: {"listOfStudentIDs": studentID}})
    }
  },
});

const submitQuiz = mutationWithClientMutationId({
  name: 'SubmitQuiz',
  inputFields: {
    id: {type: GraphQLString},
    pastQuiz: {type: InputPastQuizType},
  },
  mutateAndGetPayload: ({ id, pastQuiz }) => {
    return Student.findByIdAndUpdate(id, {$push: {"pastQuizzes": pastQuiz}})
  },
});

const addQuestion = mutationWithClientMutationId({
  name: 'AddQuestion',
  inputFields: {
    id: { type: GraphQLString }, 
    question: { type: InputQuestionType }
  },
  mutateAndGetPayload: ({ id, question }) => {
    return Lesson.findOneAndUpdate({"_id": id}, {$push: {"questions": question}})
  },
});

const deleteLesson = mutationWithClientMutationId({
  name: 'DeleteLesson',
  inputFields: {
    id: {type: new GraphQLNonNull(GraphQLString)}
  },
  mutateAndGetPayload: ({ id }) => {
    const obj = fromGlobalId(id)
    return Lesson.findByIdAndRemove(obj.id);
  },
});

const addNote = mutationWithClientMutationId({
  name: 'AddNote',
  inputFields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    url: {type: GraphQLString}  
  },
  mutateAndGetPayload: ({ id, name, url }) => {
    return Lesson.findByIdAndUpdate(id, {$set: {"notesName" : name, "notesURL" : url}})
  },
});

const deleteNote = mutationWithClientMutationId({
  name: 'DeleteNote',
  inputFields: {
    id: {type: GraphQLString},
  },
  mutateAndGetPayload: ({ id }) => {
    const obj = fromGlobalId(id)
    return Lesson.findByIdAndUpdate(obj.id, {$set: {"notesName" : null, "notesURL" : null}})
  },
});

const addWorksheet = mutationWithClientMutationId({
  name: 'AddWorksheet',
  inputFields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    url: {type: GraphQLString} 
  },
  mutateAndGetPayload: ({ id, name, url }) => {
    return Lesson.findByIdAndUpdate(id, {$set: {"worksheetName": name, "worksheetURL": url}})
  },
});

const deleteWorksheet = mutationWithClientMutationId({
  name: 'DeleteWorksheet',
  inputFields: {
    id: {type: GraphQLString},
  },
  mutateAndGetPayload: ({ id }) => {
    const obj = fromGlobalId(id)
    return Lesson.findByIdAndUpdate(obj.id, {$set: {"worksheetName" : null, "worksheetURL" : null}})
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
    };
  },
});

export default Mutation;
