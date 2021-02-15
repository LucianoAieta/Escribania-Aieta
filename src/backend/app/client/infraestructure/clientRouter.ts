import express, { Request, Response } from 'express';
import { CreateClient } from '../app/create/createClient';
import { DeleteClient } from '../app/delete/deleteClient';
import { loadClients } from '../app/load/loadClients';
import { updateClientData } from '../app/update/updateClient';
const router = express.Router();

router.post('/createclient', async (req: Request, res: Response) => {
	await CreateClient(req.body);
	res.json(JSON.stringify({ created: true }));
});

router.post('/deleteclient', async (req: Request, res: Response) => {
	await DeleteClient(req.body.id);
	res.json(JSON.stringify({ deleted: true }));
});

router.get('/clientes', async (req: Request, res: Response) => {
	const clients = await loadClients(0, 20);
	res.json(clients);
});

router.put('/update/client', async (req: Request, res: Response) => {
	await updateClientData(req.body);
	res.json(JSON.stringify({ updated: true }));
});

module.exports = router;
