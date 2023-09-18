import express from 'express';
import { autenticado, naoAutenticado } from '../controllers/AgendaController.js';
import { authorize } from '../middleware/authorize.js';

const agendaRouter = express.Router();

agendaRouter.get('/autenticado', authorize, autenticado);
agendaRouter.get('/naoAutenticado', naoAutenticado);

export default agendaRouter;