import NextAuth from "next-auth"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import { Sequelize } from "sequelize"
import dbConfig from '../../../utils/Config/dbConfig'
import GoogleProvider from "next-auth/providers/google"



const connection = new Sequelize(dbConfig);

export const Connect = () =>{

    Sequelize.authenticate()
    .then(function(){
        console.log("Conectado com Sucesso")
    })
    .catch(function(erro){
        console.log("Falha ao conectar: "+erro)
    })
}

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

  adapter: SequelizeAdapter(Sequelize),

  session:{
    jwt:true,
  },

  jwt:{
    secret: process.env.JWT_SECRET,
  },
  
})  