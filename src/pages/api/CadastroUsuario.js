import User from '../../Models/User'

const getServerSideProps = async (e) => {
    e.preventDefault();
    const { nome_usuario, email_usuario, senha_usuario} = e.target.value;
    const usuario = await User.create({ 
        nome_usuario, email_usuario, senha_usuario 
    });

    return usuario;      
}

export default getServerSideProps;