const autenticado = (req, res)=> {
    return res.status(200).json({autenticado: true})
}

const naoAutenticado = (req, res)=> {
    return res.status(200).json({autenticado: false})
}

export { autenticado, naoAutenticado }