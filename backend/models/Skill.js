import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Frontend', 'Backend', 'AI/ML', 'Tools'], required: true },
  iconUrl: { type: String }, // Link to your React/Mongo SVGs
  proficiency: { type: Number, min: 1, max: 100 } // Good for a visual progress bar
});

export default mongoose.model('Skill', skillSchema);