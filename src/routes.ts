import { Router } from 'express';
import header_view from './request_header_service';

const router = Router();


router.get('/api', header_view)


export default router;
