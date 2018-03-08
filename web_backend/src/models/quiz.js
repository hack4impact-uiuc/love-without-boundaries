import Question from './question.js'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizName: { type: String },
    listofQuestions: [
       question: [ 
         questionName: String,
           answers: {
           answerName: String,
           isCorrect: String
         }
       ]
    ]
  });
  
export default mongoose.model('Quiz', QuizSchema);


// addQuestion( quizId: ID, question: { text: String, answers: [{ text: String, isCorrect: Boolean }] }) {
//   questions [{

//   }]
// }

// deleteQuestion (quizId, 0)
