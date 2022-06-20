import NextAuth from "next-auth"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import { Sequelize }  from "sequelize"
import GoogleProvider from "next-auth/providers/google"

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
);


export default NextAuth({   
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
        }
      }),
  ],

  adapter: SequelizeAdapter(sequelize),

  session:{
    jwt:true,
  },

  jwt:{
    secret: process.env.JWT_SECRET,
  },
  
})  