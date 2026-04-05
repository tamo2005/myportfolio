import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  dateIssued: { type: Date },
  imageUrl: { type: String, required: true },
  credentialLink: { type: String } // Link to verify it online
});

export default mongoose.model('Certificate', certificateSchema);