import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    // id: { type: String},
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
    }, //Change to Quiz later
    worksheetName: { type: String}, 
    worksheetURL: { type: String} ,
    notesName: {type: String},
    notesURL: {type: String}

    
  });
  
export default mongoose.model('Lesson', LessonSchema);
