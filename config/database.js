require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST ,DB_name,DB_PORT} = process.env;
// Aquí van tus credenciales para conectarte a la base de datos.
// const sequelize = new Sequelize(database, username, password, {...});
const sequelize= new Sequelize(DB_name,DB_USER,DB_PASSWORD,{
    dialect :'postgres',
    host :DB_HOST,
    port :DB_PORT,

})

/*const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogshousedb`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);*/

try{
    sequelize.authenticate();
    console.log("Conexión establecida con éxito");
}catch (error){
    console.error("Error al conectar con BD",error);
}

module.exports=sequelize;