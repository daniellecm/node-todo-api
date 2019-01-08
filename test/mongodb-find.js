//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Erro ao conectar ao banco de dados')
    }
    console.log('Conectado com sucesso')

    const db = client.db('TodoApp')

    db.collection("Todos").find({
            _id: new ObjectID('5c34888efa3d31402658bebf')
        }).toArray().then( (docs) => {
        console.log(docs)
    }, (err) => {
        console.log("Erro ao ler dados")
    })

    db.collection("Users").find({name: "Danielle"}).toArray().then( (docs) => {
        console.log("Users:")
        console.log(docs)
    }, (err) => {
        console.log("Erro ao ler dados")
    })

    /*
    db.collection("Todos").find().count().then( (count) => {
        console.log(`Total: ${count}`)
    }, (err) => {
        console.log("Erro ao ler dados")
    })
    */


    //client.close()
})
