import express from 'express';
import 'express-async-errors';
import * as tagController from '../controller/tag.js';

const router = express.Router();

router.get('/', tagController.getTags);
router.post('/', tagController.createTag);
router.put('/:id', tagController.updateTag);
router.delete('/:id', tagController.deleteTag);
export default router;
