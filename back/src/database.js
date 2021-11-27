const mongoose = require('mongoose')
URI = ('mongodb://localhost/bdKinderPlanner_Final')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(db => console.log('Estoy conectado a la db:', db.connection.name))
    .catch(error => console.log(error))

module.export = mongoose