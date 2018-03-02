import { GraphQLObjectType, GraphQLList} from 'graphql';
import StudentType from '../types/StudentType'


import Student from '../../models/student';

import Answer from '../../models/answer';

import AnswerType from '../types/AnswerType';

import Quiz from '../../models/quiz';

import QuizType from '../types/QuizType';

import Question from '../../models/question';

import QuestionType from '../types/QuestionType';




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
      answer: {
        type: new GraphQLList(AnswerType),
        resolve() { 
          return Answer.find()
        }
      },
      // question: {
      //   type: new GraphQLList(QuestionType),
      //   resolve() { 
      //     return Question.find()
      //   }
      // },
      // quiz: {
      //   type: new GraphQLList(QuizType),
      //   resolve() { 
      //     return Quiz.find()
      //   }
      // },

    };
  },
});

export default Query;