//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Erro ao conectar ao banco de dados')
    }
    console.log('Conectado com sucesso')

    const db = client.db('TodoApp')

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: 'false'
    }, (err, result) => {
        if(err){
            return console.log('Erro ao inserir dados:', err)
        }
        console.log(result.ops)
    })

    db.collection('Users').insertOne({
        name: 'Danielle',
        age: '33',
        location: 'São Paulo/SP'
    }, (err, result) => {
        if(err){
            return console.log('Erro ao inserir dados:', err)
        }
        console.log(result.ops)
        console.log(result.ops[0]._id.getTimestamp())
    })
*/
    client.close()
})
