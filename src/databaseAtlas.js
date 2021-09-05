var MongoClient = require('mongodb').MongoClient;
require('dotenv').config({path:'./.env'})

const MONGODB_KEY = process.env.MONGODB_KEY
var uri = MONGODB_KEY;
   
export async function connectDBA() {
    try {
        const client = await MongoClient.connect((uri), { useUnifiedTopology: true })
        const db = client.db('NodeyMongo');
         return db;
        
    } catch(e) {
        console.log(e);
    }
};