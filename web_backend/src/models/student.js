import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String },
    email: { type: String },
    teacherID: { type: String },
    grades: [{
        lessonID: { type: String },
        score: { type: Number },
    }],
    pastQuizzes: [{
        lessonID: { type: String },
        quizName: { type: String },
        score: { type: Number },
        submittedAnswers: [{
            questionID: { type: String },
            answerChosen: { type: String },
        }],
    }],
    worksheets: [{
        lessonID: { type: String },
        url: { type: String },
    }],
    URL: { type: String },
});
export default mongoose.model('Student', StudentSchema);
