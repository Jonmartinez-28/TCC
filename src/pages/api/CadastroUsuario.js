import UserConfig from '../../Models/User'

const getServerSideProps = async(e) => {
    e.preventDefault();
    const { nome_usuario , email_usuario, senha_usuario } = e.target.values;
    const usuario = await UserConfig.create({ nome_usuario, email_usuario, senha_usuario, });

    
}

export default getServerSideProps;