import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import Sequelize, { DataTypes } from 'sequelize'
import SequelizeAdapter, { models } from '@next-auth/sequelize-adapter'
import dbConfig from '../../../utils/Db/dbConfig'


// Conexão com o Banco de Dados
const sequelize = new Sequelize(dbConfig);

export default NextAuth({   
  providers: [

      // Provider de Email
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
        maxAge: 30 * 24 * 60 * 60,
        sendVerificationRequest({
          identifier: email,
          url,
          provider: { server, from },
        })
        {
          // Requisição para autenticação via email
          <sendVerificationRequest />
        }
      }),
  ],

  // Configuração de Sessões
  session:{
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  // Configuração do Adapter
  adapter: SequelizeAdapter(sequelize, {
    models:{
      User: sequelize.define("uscsuario", {
        ...models.User,
        nome_usuario: DataTypes.INTEGER,
        email_usuario: DataTypes.STRING,
        senha_usuario: DataTypes.STRING,
        status_usuario: DataTypes.STRING, 
      })
    }
  }),

  // Configuração das Páginas 
  pages:{
    signIn: "/login",
    error: "/login",
    newUser:"/",
    verifyRequest: "/utils/NodeMailer",
  },
})  