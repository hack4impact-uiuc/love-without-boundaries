import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    role: { type: Schema.Types.ObjectId },
    googleAuthId: { type: String },
});

// UserSchema.methods.canBeAccessedBy = (user) => 
    // TODO: Is user an Admin?
    //  user.admin


export default mongoose.model('User', UserSchema);
