import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    name: { type: String },
    quiz: {
        name: { type: String },
        questions: [{
            questionName: { type: String },
            answers: [{
                answerName: { type: String },
                isCorrect: { type: Boolean },
            }],
        }],
    },
    worksheetURL: { type: String },
    notesURL: { type: String },
});

export default mongoose.model('Lesson', LessonSchema);
