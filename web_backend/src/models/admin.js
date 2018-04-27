import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: { type: String },
    email: { type: String },
    googleID: { type: String },
});

// AdminSchema.methods.canBeAccessedBy = user => {
//     // TODO: Is user an Admin?
//     return user.admin;
// };
export default mongoose.model('Admin', AdminSchema);
