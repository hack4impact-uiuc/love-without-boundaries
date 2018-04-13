import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    role: { type: String },
    token: { type: String },
});


export default mongoose.model('User', UserSchema);