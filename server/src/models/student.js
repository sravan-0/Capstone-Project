import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  attendance: { type: Number, required: true, min: 0, max: 100 },
  marks: { type: Number, required: true, min: 0, max: 100 }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Student', schema);
