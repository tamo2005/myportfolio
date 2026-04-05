import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  organization: { type: String, required: true },
  type: { type: String, enum: ['Education', 'Work', 'Extracurricular'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date }, // If empty, it means "Present"
  description: [{ type: String }] // Array of bullet points
});

export default mongoose.model('Experience', experienceSchema);