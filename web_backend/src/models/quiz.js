import Question from './question.js'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizName: { type: String },
    listOfQuestions : [{ type: (Question) }]
  });
  
export default mongoose.model('Quiz', QuizSchema);