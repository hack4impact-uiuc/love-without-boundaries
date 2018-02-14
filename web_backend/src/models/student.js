const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String },
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }]
  });
  
export default mongoose.model('Student', StudentSchema);