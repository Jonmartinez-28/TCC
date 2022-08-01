import Sequelize from "sequelize";

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true,
    }
});

const UserConfig = sequelize.define("usuarios",{

    email_usuario: {
            type: Sequelize.STRING,
    },

    senha_usuario:{    
        type:Sequelize.STRING,
    },
    nome_usuario: {
        type: Sequelize.STRING,  
    },
});

export default UserConfig;