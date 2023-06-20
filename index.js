const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database')
const Dog = require('./models/dog')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({extended: true}));
(async function connectToDatabase() {
    try {
        await db.authenticate();
        console.log("Connection established successfully.");
        await db.sync({force: false}); // sync sincroniza los objetos del modelo con las tablas correspondientes en tu base de datos.
        console.log("Models synced successfully. \n Server: http://localhost:3000/");

    } catch (err) {
        console.error(`Failed to connect or sync: ${err}`);
    }
})();

//creating 2 dogs
Dog.create({name: 'Neo', color: 'Red & Amber', tail_length: 22, weight: 32,})
    .then(dog => {
        console.log(`the  ${dog.name}has been created!!!!.`);
    })
    .catch(error => {
        console.error('Error creating dog:', error);
    });
Dog.create({name: 'Jessy', color: 'Black & White', tail_length: 7, weight: 14,})
    .then(dog => {
        console.log(`the  ${dog.name}has been created!!!!.`);
    })
    .catch(error => {
        console.error('Error creating dog:', error);
    });
// End creating 2 dogs

//routes
const routes = require('./routes/routes');

app.use('/', routes);

//server
app.listen(3000, () => console.log("Starting server in PORT 3000...http://localhost:3000/"));