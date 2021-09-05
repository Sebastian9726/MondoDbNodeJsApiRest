
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://Sebastian:test@cluster0-shard-00-00.lte4s.mongodb.net:27017,cluster0-shard-00-01.lte4s.mongodb.net:27017,cluster0-shard-00-02.lte4s.mongodb.net:27017/NodeyMongo?ssl=true&replicaSet=atlas-v36rys-shard-0&authSource=admin&retryWrites=true&w=majority";
   
      
export async function connectDBA() {
    try {
        const client = await MongoClient.connect((uri), { useUnifiedTopology: true })
        const db = client.db('NodeyMongo');
         return db;
        
    } catch(e) {
        console.log(e);
    }
};