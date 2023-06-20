const express = require('express');
const Dog = require("../models/dog");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server and configuration correct!');
});

router.get('/ping', (req, res) => {
    res.send('Dogshouseservice.Version1.0.1');
});

router.get('/dogs', async (req, res) => {
        try {
            const {attribute, order, pageNumber, limit} = req.query;
            //----
            if (attribute && order) {
                // Verificar si attribute es un atributo válido del modelo Dog
                const validAttributes = ['name', 'color', 'tail_length', 'weight']; // Agrega aquí los atributos válidos
                if (!validAttributes.includes(attribute)) {
                    return res.status(400).send('Invalid attribute');
                }

                // Make sure 'asc' o 'desc'
                if (order !== 'asc' && order !== 'desc') {
                    return res.status(400).send('Fail Order you have to USE a desc or asc to order');
                }


                //pagination and limit
                if (pageNumber && limit) {
                    const offset = (pageNumber - 1) * limit;
                    const dogs = await Dog.findAll({
                        order: [[attribute, order.toUpperCase()]],
                        offset,
                        limit: parseInt(limit),
                    });
                    res.json(dogs);
                    return
                }


                // Consulting Sequelize with order
                const dogs = await Dog.findAll({
                    order: [[attribute, order.toUpperCase()]], // Organizar por el atributo y orden especificados
                });

                res.json(dogs);
            } else {
                // Si no se especifican los parámetros, obtener todos los perros sin orden específico
                const dogs = await Dog.findAll();
                res.json(dogs);
            }

            //----

        } catch
            (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post('/dog', async (req, res) => {
    const {name, color, tail_length, weight} = req.body;
    console.log(name, color, tail_length, weight)
    return "false";
    try {
        const {name, color, tail_length, weight} = req.body;

        const newDog = await Dog.create({
            name,
            color,
            tail_length,
            weight,
        });
        res.json(newDog);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({error: 'There is a Dog with the same name'});
        } else if (error.name === 'SequelizeValidationError') {
            res.status(400).json({error: 'Data is incorrect', msj: error.message});
        } else {
            console.error('Error al crear el perro:', error);
            res.status(500).json({error: 'Error al crear el perro', msj: error});
        }
    }
});

module.exports = router;