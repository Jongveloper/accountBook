import express from 'express';
import 'express-async-errors';
import * as tagController from '../controller/tag.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', isAuth, tagController.getTags);
router.post('/', isAuth, tagController.createTag);
router.put('/:id', isAuth, tagController.updateTag);
router.delete('/:id', isAuth, tagController.deleteTag);
export default router;
