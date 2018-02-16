import { GraphQLObjectType, GraphQLList } from 'graphql';
import StudentType from '../types/StudentType'
import QuizType from '../types/QuizType'
import QuestionType from '../types/QuestionType'
import AnswerType from '../types/AnswerType'

import Student from '../../models/student';
import Quiz from '../../models/quiz';
import Question from '../../models/question';
import Answer from '../../models/answer';


const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields() {
    return {
      students: {
        type: new GraphQLList(StudentType),
        resolve() { 
          return Student.find()
        }
      }, 
      quizzes: {
        type: new GraphQLList(QuizType),
        resolve() {
          return Quiz.find()
        }
      },
      questions: {
        type: new GraphQLList(QuestionType),
        resolve() {
          return Question.find()
        }
      },
      answers: {
        type: new GraphQLList(AnswerType),
        resolve() {
          return Answer.find()
        }
      }
    };
  },
});

export default Query;
