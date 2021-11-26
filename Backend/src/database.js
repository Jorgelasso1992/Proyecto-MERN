//Conexión a nuestra db en localhost
const mongoose = require('mongoose');

URI = ('mongodb://localhost/KinderPlanner');

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Conectado a la base de datos', db.connection.name))
    .catch(error => console.log(error));

module.exports = mongoose;