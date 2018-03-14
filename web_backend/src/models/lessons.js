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
              isCorrect: { type: Boolean }
          }]
      }],
    },
    worksheetName: { type: String}, 
    worksheetURL: { type: String} ,
    notesName: {type: String},
    notesURL: {type: String}
  });
  
export default mongoose.model('Lesson', LessonSchema);
