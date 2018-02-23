const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    user: { type: String },
    teacher: {type: String },
    grades: [{type: String, type: Number}]
  });
  
export default mongoose.model('Student', StudentSchema);
