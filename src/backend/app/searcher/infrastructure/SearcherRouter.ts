import express, { Request, Response } from 'express';
import SearchClientByName from '../../client/app/search/SearchClientByName';

const router = express.Router();

// Client Router
router.get(
	'/search/clients/text/:text',
	async (req: Request, res: Response) => {
		const search = await new SearchClientByName(req.params.text).logic();
		res.json(search);
	}
);

module.exports = router;
