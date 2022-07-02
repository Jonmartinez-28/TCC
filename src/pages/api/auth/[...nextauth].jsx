import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import Sequelize from 'sequelize'
import SequelizeAdapter, { models } from '@next-auth/sequelize-adapter'

// Conexão com o Banco de Dados
const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
    }
});


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
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,

  },

  // Configuração do Adapter
  adapter: SequelizeAdapter(sequelize),

  // Configuração das Páginas 
  pages:{
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
})  