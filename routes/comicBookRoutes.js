// src/routes/comicBookRoutes.js
import { Router } from 'express';
import { createComicBook, updateComicBook, deleteComicBook, getAllComicBooks, getComicBookById } from '../controllers/comicBookController.js';
import paginationMiddleware from '../middleware/paginationMiddleware.js';
import filterSortMiddleware from '../middleware/filterSortMiddleware.js';

const router = Router();
 
router.post('/', createComicBook);
router.put('/:id', updateComicBook);
router.delete('/:id', deleteComicBook);
router.get('/', paginationMiddleware, filterSortMiddleware, getAllComicBooks);
router.get('/:id', getComicBookById);

export default router;