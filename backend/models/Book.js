import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title:  { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre:  { type: String, default: '' },
    status: { type: String, enum: ['reading', 'read', 'wishlist'], default: 'wishlist' },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    notes:  { type: String, default: '' },
  },
  { timestamps: true }
)

export default mongoose.model('Book', bookSchema)
