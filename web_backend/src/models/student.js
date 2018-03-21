import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String },
    email: { type: String },
    teacherID: { type: String },
    grades: [{
        lesson: { type: String },
        score: { type: Number },
    }],
    pastQuizzes: [{
        quizName: { type: String },
        score: { type: Number },
        submittedAnswers: [{
            questionID: { type: String },
            answerChosen: { type: String },
            correctAnswer: { type: String },
        }],
    }],
});
export default mongoose.model('Student', StudentSchema);
