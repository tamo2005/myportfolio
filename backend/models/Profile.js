import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: { type: String, default: 'Tamagno Roy' },
  tagline: { type: String },
  bio: { type: String },
  resumeUrl: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  systemPrompt: { type: String } // Secret instructions for your AI clone's personality
});

export default mongoose.model('Profile', profileSchema);