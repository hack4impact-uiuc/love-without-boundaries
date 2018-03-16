
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
import { mutationWithClientMutationId } from 'graphql-relay';

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
  // outputFields: {
  //   admin: {
  //     type: AdminType,
  //     resolve: payload => payload,
  //   },
  // },
  mutateAndGetPayload: ({ id }) => {
    return Admin.findByIdAndRemove(id);
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent,
      // createStudent: {
      //   type: StudentType,
      //   args: { name: { type: GraphQLString }, email: { type: GraphQLString } },
      //   resolve(root, { name, email}, ctx) {
      //     const s = new Student({ name, email });
      //     return s.save()
      //   } 
      // },
      createTeacher, 
      // createTeacher: {
      //   type: TeacherType,
      //   args: { name: { type: GraphQLString }, 
      //           email: { type: GraphQLString }
      //         },
      //   resolve(root, { name, email }, ctx) {
      //     const t = new Teacher({ name, email });
      //     return t.save()
      //   } 
      // },
      createAdmin,
      // createAdmin: {
      //   type: AdminType,
      //   args: { name: { type: GraphQLString },
      //           email: { type: GraphQLString }
      //         },
      //   resolve(root, { name, email }, ctx) {
      //     const a = new Admin({ name, email });
      //     return a.save()
      //   } 
      // },
      // createQuiz: {
      //   type: QuizType,
      //   args: { name: { type: GraphQLString },
      //           questions: { type: new GraphQLList(InputQuestionType) }
      //         },
      //   resolve(root, { name, questions }, ctx) {
      //     const q = new Quiz({ name, questions });
      //     return q.save()
      //   } 
      // },
      deleteAdmin, 
      // deleteAdmin: { 
      //   type: AdminType,
      //   args: { id: {type: new GraphQLNonNull(GraphQLID)} },
      //   resolve(root, {id}, ctx){
      //     return Admin.findByIdAndRemove(id);
      //   }
      // },
      // deleteQuiz: { 
      //   type: QuizType,
      //   args: { id: {type: new GraphQLNonNull(GraphQLID)} },
      //   resolve(root, {id}, ctx){
      //     return Quiz.findByIdAndRemove(id);
      //   }
      // },
      addGrade: {
        type: StudentType,
        args: { id: { type: GraphQLString }, lesson: { type: GraphQLString }, score: { type: GraphQLInt } },
        resolve(root, { id, lesson, score}, ctx) {
          var grade = {"lesson": lesson, "score": score};
          return Student.findOneAndUpdate({"_id": id}, {$push: {"grades": grade}})
        } 
      }, 
      assignStudentToTeacher: {
        type: StudentType, 
        args: {studentID: {type: GraphQLString}, teacherID: {type: GraphQLString}}, 
        resolve(root, {studentID, teacherID}, ctx) {
        if (Student.findById(studentID) && Teacher.findById(teacherID)) {
          return Student.findByIdAndUpdate(studentID, {$set: { teacherID: teacherID }}) && Teacher.findByIdAndUpdate(teacherID, {$push: {"listOfStudentIDs": studentID}})
        }
        }
      },
      submitQuiz: {
        type: StudentType,
        args: {
          id: {type: GraphQLString},
          pastQuiz: {type: InputPastQuizType},
        },
        resolve(root, { id, pastQuiz }, ctx) {
          return Student.findByIdAndUpdate(id, {$push: {"pastQuizzes": pastQuiz}})
        }
      },
      addQuestion: {
        type: LessonType,
        args: { id: { type: GraphQLString }, question: { type: InputQuestionType } },
        resolve(root, { id, question }, ctx) {
          return Lesson.findOneAndUpdate({"_id": id}, {$push: {"questions": question}})
        } 
      }, 
      // addQuestion: {
      //   type: QuizType,
      //   args: { id: { type: GraphQLString }, question: { type: InputQuestionType } },
      //   resolve(root, { id, question }, ctx) {
      //     return Quiz.findOneAndUpdate({"_id": id}, {$push: {"questions": question}})
      //   } 
      // }, 
      // deleteQuestion: {
      //   type: QuestionType,
      //   args: { id: { type: GraphQLString }, qID: { type: GraphQLString } },
      //   resolve(root, { id, qID }, ctx) {
      //     return Question.findByIdAndRemove(qID)
      //     // return Quiz.findById(id, Question.findByIdAndRemove(qID))
      //     // return Quiz.findByIdAndRemove(id)
      //     // return Quiz.findOneAndUpdate({"_id": id}, {$pullAll: {"questions": [Quiz.find({questionName: qName})]}})
      //   } 
      // }, 
      createLesson,
      // createLesson: {
      //   type: LessonType,
      //   args: {
      //     name: {type: GraphQLString }, 
      //     quiz: { type: InputQuizType }, 
      //     worksheetName: { type: GraphQLString}, 
      //     worksheetURL: { type: GraphQLString},
      //     notesName: {type: GraphQLString},
      //     notesURL: {type: GraphQLString},
      //   },
      //   resolve(root, { name, quiz, worksheetName, worksheetURL, notesName, notesURL}, ctx) {
      //     const s = new Lesson({name, quiz, worksheetName, worksheetURL, notesName, notesURL})
      //     return s.save()
      //   }
      // },
      deleteLesson: { 
        type: LessonType,
        args: { id: {type: new GraphQLNonNull(GraphQLString)} },
        resolve(root, {id}, ctx){
          return Lesson.findByIdAndRemove(id);
        }
      },
      addNote: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
          name: {type: GraphQLString},
          url: {type: GraphQLString}  
        },
        resolve(root, { id, name, url}, ctx) {
          return Lesson.findByIdAndUpdate(id, {$set: {"notesName" : name, "notesURL" : url}})
        }
      },
      deleteNote: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
        },
        resolve(root, {id}) {
          return Lesson.findByIdAndUpdate(id, {$set: {"notesName" : null, "notesURL" : null}})
        }
      },
      addWorksheet: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
          name: {type: GraphQLString},
          url: {type: GraphQLString} 
        },
        resolve(root, { id, name, url}, ctx) {
          return Lesson.findByIdAndUpdate(id, {$set: {"worksheetName": name, "worksheetURL": url}})
        }
      },
      deleteWorksheet: {
        type: LessonType,
        args: {
          id: {type: GraphQLString},
        },
        resolve(root, {id}) {
          return Lesson.findByIdAndUpdate(id, {$set: {"worksheetName" : null, "worksheetURL" : null}})
        }
      },
      
    };
  },
});

export default Mutation;
