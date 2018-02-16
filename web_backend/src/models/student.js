const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    User: { type: String },
    Teacher: {type: String },
    Grades: [{type: String, type: Number}]
  });
  
export default mongoose.model('Student', StudentSchema);
