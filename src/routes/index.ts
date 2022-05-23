import { Router } from 'express';
import { getTest } from '../controllers';

const router = Router();

router.get('/', getTest);

export default router;
