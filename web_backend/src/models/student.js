const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentName: { type: String }
  });
  
export default mongoose.model('Student', StudentSchema);
