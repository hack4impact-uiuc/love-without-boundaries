import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

import StudentType from '../types/StudentType'
import QuizType from '../types/QuizType'
import QuestionType from '../types/QuestionType'
import AnswerType from '../types/AnswerType'

import Student from '../../models/student';
import Quiz from '../../models/quiz';
import Question from '../../models/question';
import Answer from '../../models/answer';


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString } },
        resolve(root, { name }, ctx) {
          const s = new Student({ name });
          return s.save()
        } 
      },
      createQuiz: {
        type: QuizType,
        args: { quizName: { type: GraphQLString }, listofQuestions: { type: GraphQLList(Question) } },
        resolve(root, { quizName, listofQuestions }, ctx) {
          const q = new Quiz({ quizName, listofQuestions });
          return q.save()
        } 
      },
      createQuestion: {
        type: QuestionType,
        args: { questionName: { type: GraphQLString }, listofAnswers: {type: GraphQLList(Answer)} },
        resolve(root, { questionName, listofAnswers }, ctx) {
          const q = new Question({ questionName, listofAnswers });
          return q.save()
        } 
      },
      createAnswer: {
        type: AnswerType,
        args: { answerName: { type: GraphQLString }, isCorrect: { type: GraphQLBoolean }  },
        resolve(root, { answerName, isCorrect }, ctx) {
          const a = new Answer({ answerName, isCorrect });
          return a.save()
        } 
      },

    };
  },
});

export default Mutation;
