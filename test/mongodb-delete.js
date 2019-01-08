const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Erro ao conectar ao banco de dados')
    }
    console.log('Conectado com sucesso')

    const db = client.db('TodoApp')

    /*
    db.collection('Todos').deleteMany({ text: "Todo test"}).then((result) => {
        console.log(`Registros excluídos: ${result.result.n}`)
    })
    
    db.collection('Todos').deleteOne({ text: "Teste"}).then((result) => {
        console.log(`Registro excluído com sucesso`)
    })
    
    db.collection('Todos').findOneAndDelete({ text: "Teste"}).then((result) => {
        console.log('Registro excluído:')
        console.log(result)
    })

    db.collection('Users').deleteMany({ name: "João"}).then((result) => {
        console.log(`Registros excluídos: ${result.result.n}`)
    })
    */

    db.collection('Users').findOneAndDelete({ 
            _id: new ObjectID("5c349184fa3d31402658c0f5")
        }).then((result) => {
            console.log('Registro excluído:')
            console.log(result)
    })

    

    //client.close()
})
