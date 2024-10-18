// src/controllers/comicBookController.js
import ComicBook  from '../models/ComicBook.js';

export async function createComicBook(req, res) {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateComicBook(req, res) {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteComicBook(req, res) {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.json({ message: 'Comic book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllComicBooks(req, res) {
  try {
    const comicBooks = await ComicBook.find(req.filterOptions)
      .sort(req.sortOptions)
      .skip(req.skip)
      .limit(req.limit);
    
    const total = await ComicBook.countDocuments(req.filterOptions);
    
    res.json({
      comicBooks,
      currentPage: req.page,
      totalPages: Math.ceil(total / req.limit),
      totalItems: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getComicBookById(req, res) {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}