import Teacher from './teacher.js'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String },
  email: { type: String },
  teacherID: { type: String },
  grades: [{
    lesson: {type: String},
    score: {type: Number}
  }]
});
export default mongoose.model('Student', StudentSchema);
