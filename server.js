import app from './app/express.js';
import database from './app/models/db.js';

import Usuario from './app/models/Usuario.js';

const port = app.get('port');

try {
    const resultado = database.sync();
}
catch(error){
    console.log(error);
}

app.listen(port, () => {
        console.log("Serviço iniciado!");
    }
);