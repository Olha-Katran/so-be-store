import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = [
        { id: 1, name: 'Notebook', price: 250 },
        { id: 2, name: 'Calendar', price: 15 },
        { id: 3, name: 'Postcards Set', price: 10 },
    ];

    res.json(products);
});

export default router;