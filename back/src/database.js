const mongoose = require('mongoose')

const URI = ('mongodb+srv://Ariel:ariel.1991@cluster0.cpe7o.mongodb.net/bdKinderplanner?retryWrites=true&w=majority')



mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(db => console.log('Estoy conectado a la db:', db.connection.name))
    .catch(error => console.log(error))

module.export = mongoose