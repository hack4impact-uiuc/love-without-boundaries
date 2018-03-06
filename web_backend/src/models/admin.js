const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    adminName: { type: String },
    email: { type: String },
    password: { type: String },
  });
  
export default mongoose.model('Admin', AdminSchema);