import express from 'express';
import { criarUsuario, autenticar } from '../controllers/UsuarioController.js';

const usuarioRouter = express.Router();

usuarioRouter.post('/', criarUsuario);
usuarioRouter.post('/autenticar', autenticar);

export default usuarioRouter;