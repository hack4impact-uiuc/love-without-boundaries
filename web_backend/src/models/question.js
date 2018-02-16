import Answer from './answer.js'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionName: { type: String },
    listofAnswers : [{ type: Answer }]
  });
  
export default mongoose.model('Question', QuestionSchema);
