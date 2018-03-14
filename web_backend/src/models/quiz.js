import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    name: { type: String },
    questions: [{
        questionName: { type: String },
        answers: [{
            answerName: { type: String },
            isCorrect: { type: Boolean }
        }]
    }],
    lessonID: { type: String }
});
  
export default mongoose.model('Quiz', QuizSchema);