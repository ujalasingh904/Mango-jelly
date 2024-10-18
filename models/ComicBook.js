// src/models/ComicBook.js
import { Schema, model } from 'mongoose';

const comicBookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  yearOfPublication: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  numberOfPages: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'used'], required: true },
  description: { type: String },
}, { timestamps: true });

export default model('ComicBook', comicBookSchema);