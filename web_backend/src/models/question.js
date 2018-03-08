import Answer from './answer.js'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionName: { type: String },
    // listOfAnswers : [{ Answer: String }]
    listOfAnswers : [{ 
      answerName: { type: String },
      isCorrect: { type: Boolean }
    }]
  });
  
export default mongoose.model('Question', QuestionSchema);