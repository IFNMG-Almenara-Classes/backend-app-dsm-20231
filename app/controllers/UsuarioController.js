import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

const esconderSenha = (usuario) => {
    const { senha, ...usuarioSemSenha  } = usuario;
    return usuarioSemSenha;
}

const criarUsuario = async (req, res) => {
    try {
        if (await Usuario.findOne({ where: { usuario: req.body.usuario }})) {
            throw "Usuario '" + req.body.usuario + "' já existe no sitema";
        }
        req.body.senha = await bcrypt.hash(req.body.senha, 10);

        let usuario = await Usuario.create(req.body);        

        return res.status(200)
            .json(esconderSenha(usuario.get()));

    } catch(error){
        return res.status(400)
            .json({error: error})
    }
}

const autenticar = async (req, res) => {
    console.log(req.body)
    try {
        const { usuario, senha } = req.body;
        const user = await Usuario.findOne({where: {usuario: usuario}});

        if(!user || !await bcrypt.compare(senha, user.senha)){
            throw "Usuário ou senha incorretos!"
        }

        const token = jwt.sign(
            { idUsuario: user.id },
            config.get('secret'), 
            { expiresIn: '7d' }
        )

        return res.status(200)
            .json({ ...esconderSenha(user.get()), token})

    } catch(error){
        console.log(error,1)
        return res.status(400)
            .json({error: error})
    }
}

export { criarUsuario, autenticar }