import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { nodeDefinitions, globalIdField, fromGlobalId } from 'graphql-relay'
import mongoose from 'mongoose';

import Student from '../../models/student';
import Admin from '../../models/admin';
import Teacher from '../../models/teacher';
import Quiz from '../../models/quiz';
import Lesson from '../../models/lessons'

import QuestionType from './QuestionType.js'
import GradeType from './GradeType';
import PastQuizType from './PastQuizType.js'
// import SubmittedAnswerType from './SubmittedAnswerType.js'

const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        const {type, id} = fromGlobalId(globalId);
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
            case 'Quiz':
                collection = Quiz;
                break;
            // case 'PastQuiz':
            //     collection = PastQuiz;
            //     break;
            case 'Lesson':
                collection = Lesson;
                break;
        }
        return collection.findById(id);
    },
    (obj) => {
        if(obj.grades) return StudentType;
        if(obj.listOfStudentIDs) return TeacherType;
        if (obj.worksheetName) return LessonType;
        if (obj.questions) return QuestionType;
        return AdminType;
    }
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
        resolve: student => {
          return Teacher.findOne({listOfStudentIDs: student._id})
        }
      },
      grades: {
        type: new GraphQLList(GradeType)
      },
      pastQuizzes: {
        type: new GraphQLList(PastQuizType)
      }
    };
  },
  interfaces: [nodeInterface]
});

const TeacherType = new GraphQLObjectType({
  name: 'Teacher',
  description: 'Teacher',
  fields() {
    return {
      id: globalId('Teacher'),
      name: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString,
      },
      students: {
        description: 'Students that the teacher teachers',
        type: new GraphQLList(StudentType),
        resolve(teacher) {
          return Student.find({_id: {"$in": teacher.listOfStudentIDs}});
        }
      }
    };
  },
  interfaces: [nodeInterface]
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
    interfaces: [nodeInterface]
  },
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
          type: GraphQLString, 
        },
        worksheetName: {
          type: GraphQLString,
        },
        worksheetURL: {
          type: GraphQLString
        },
        notesName: {
          type: GraphQLString,
        },
        notesURL: {
          type: GraphQLString,
        },
      };
      interfaces: [nodeInterface]
    },
  });
  
const QuizType = new GraphQLObjectType({
    name: 'Quiz',
    description: 'Self Descriptive',
    fields() {
        return {
            id: globalId('Quiz'),
            name: {
                type: GraphQLString,
            },
            questions: {
                type: new GraphQLList(QuestionType)
            },
        };
        interfaces: [nodeInterface]
    },
});

// const PastQuizType = new GraphQLObjectType({
//   name: 'PastQuiz',
//   description: 'Self Descriptive',
//   fields() {
//       return {
//           id: globalId('PastQuiz'),
//           quizName: { type: GraphQLString },
//           score: { type: GraphQLInt },
//           submittedAnswers: {
//             type: new GraphQLList(SubmittedAnswerType)
//           }
//       };
//       interfaces: [nodeInterface]
//   },
// });

export { AdminType, TeacherType, StudentType, LessonType, QuizType, PastQuizType, nodeField };
