

const CadastroUsuario = async (req, res) => {
    const { Nome, Email, Senha } = req.params;
    const usuario = await User.create({
        Nome, Email, Senha
    });

    return res.json(usuario);
}


export default CadastroUsuario;