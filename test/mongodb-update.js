const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Erro ao conectar ao banco de dados')
    }
    console.log('Conectado com sucesso')

    const db = client.db('TodoApp')

    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c33ab4c6ec7ef263cf37faf")
    },
    {
        $set : {
            completed: true
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    */
    
    db.collection('Users').findOneAndUpdate({
        name: "Danielle"
    },
    {
        $set : {
            name: "João"
        },
        $inc : {
            age : 1
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log(`Erro: ${err.errmsg}`)
    })

    //client.close()
})
