import { GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean, GraphQLList } from 'graphql';

import Student from '../../models/student';
import StudentType from '../types/StudentType';
import Answer from '../../models/answer';
import AnswerType from '../types/AnswerType';
import Quiz from '../../models/quiz';
import QuizType from '../types/QuizType';
import Question from '../../models/question';
import QuestionType from '../types/QuestionType';
import InputAnswerType from '../types/InputAnswerType';
import InputQuestionType from '../types/InputQuestionType';
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import GradeType from '../types/GradeType'
import StudentType from '../types/StudentType'
import Student from '../../models/student';
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createAnswer: {
        type: AnswerType,
        args: { answerName: { type: GraphQLString } , isCorrect: {type: GraphQLBoolean}},
        resolve(root, { answerName, isCorrect }, ctx) {
          const a = new Answer({ answerName, isCorrect });
          return a.save()
        } 
      },
      createQuestion: {
        type: QuestionType,
        args: { questionName: { type: GraphQLString }, listofAnswers: {type: new GraphQLList(InputAnswerType)}},
        resolve(root, { questionName, listofAnswers }, ctx) {
          const q = new Question({ questionName, listofAnswers });
          return q.save()
        } 
      },
      createQuiz: {
        type: QuizType,
        args: { quizName: { type: GraphQLString } , listofQuestions: {type: new GraphQLList(InputQuestionType)}},
        resolve(root, { quizName, listofQuestions }, ctx) {
          const q = new Quiz({ quizName, listofQuestions });
          return q.save()
        } 
      },
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString },  teacher: { type: GraphQLString } },
        resolve(root, { name, teacher}, ctx) {
          const s = new Student({ name, teacher });
          return s.save()
        } 
      },
      deleteAnswer: { 
        type: AnswerType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return answers.delete(id)
        }
      },
      deleteQuestion: { 
        type: QuestionType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return questions.delete(id)
        }
      },
      deleteQuiz: { 
        type: QuizType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return quizzes.delete(id)
        }
      },
      deleteStudent: { 
        type: StudentType,
        args: { id: {type: new GraphQLNonNull(GraphQLID)} },
        resolve(root, {id}, ctx){
          return students.delete(id)
        }
      },
      addGrade: {
        type: StudentType,
        args: { name: { type: GraphQLString }, lesson: { type: GraphQLString }, score: { type: GraphQLInt } },
        resolve(root, { name, lesson, score}, ctx) {
          var grade = {"lesson": lesson, "score": score};
          return Student.findOneAndUpdate({"name": name}, {$push: {"grades": grade}})
        } 
      }
    };
  },
});

export default Mutation;
