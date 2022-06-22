import NextAuth from 'next-auth'
import SequelizeAdapter from '@next-auth/sequelize-adapter'
import { Sequelize }  from 'sequelize'
import EmailProvider from 'next-auth/providers/email'

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true,
    } 
  }
)

export default NextAuth({   
  providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
        maxAge: 24 * 60 * 60,
        sendVerificationRequest({
          identifier: email,
          url,
          provider: { server, from }
        }){
            <sendVerificationRequest />
        }
      }),
  ],
  session:{
    jwt:true,
  },
  adapter: SequelizeAdapter(sequelize),
  pages:{
    signIn: "/login",
    error: "/login"
  },
  jwt:{
    secret: process.env.JWT_SECRET,
  },
  
})  