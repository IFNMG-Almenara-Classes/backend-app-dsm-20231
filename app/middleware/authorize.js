import jwt from 'jsonwebtoken';
import config from 'config';

const authorize = (req, res, next) => {
    const token = req.headers['token'];
    if(!token){
        return res.status(401)
            .json({
                auth: false, 
                mensagem: 'Token não informado'
            });
    }

    jwt.verify(token, config.get('secret'), (err, decodificada) => {
        if(err){
            return res.status(400)
                .json({
                    auth: false,
                    mensagem: 'Falha de autenticação'    
                });
        }
        
        req.idUsuario = decodificada.idUsuario;
        next();
    }

    );
}

export { authorize }