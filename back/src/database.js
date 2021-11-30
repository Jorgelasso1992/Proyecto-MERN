const mongoose = require('mongoose')
URI = ('mongodb+srv://dbGYM:GimnasioMEVN@cluster1.iibwx.mongodb.net/bdKinderPlanner_Final?authSource=admin&replicaSet=atlas-9moey3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(db => console.log('Estoy conectado a la db:', db.connection.name))
    .catch(error => console.log(error))

module.export = mongoose