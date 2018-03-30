import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: { type: String },
    email: { type: String },
});

export default mongoose.model('Admin', AdminSchema);
