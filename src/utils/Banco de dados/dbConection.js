import dbConfig from "./dbConfig";

const connection = new Sequelize(dbConfig);

export const Connection= () =>{
    Sequelize.authenticate()
    .then(function(){
        console.log("Conectado com Sucesso")
    })
    .catch(function(erro){
        console.log("Falha ao conectar: "+erro)
    })
}

export default Connection;