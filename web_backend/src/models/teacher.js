import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: { type: String },
    email: { type: String },
    students: [{ type: String }],
});

export default mongoose.model('Teacher', TeacherSchema);
