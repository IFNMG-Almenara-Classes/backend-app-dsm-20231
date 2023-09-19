import express from 'express';
import config from 'config';
import usuarioRouter from './routes/UsuarioRoutes.js';
import agendaRouter from './routes/AgendaRoutes.js';
import cors from "cors"; //<<<<<<<<
const app = express();

app.set('port', process.env.PORT || config.get('server.port'))
app.use(express.json());
app.use(cors())   //<<<<<<<<<<<<<<
app.use(express.urlencoded({
    extended: true
}));


app.use('/usuario', usuarioRouter);
app.use('/agenda', agendaRouter);


export default app;