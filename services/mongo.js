const mongodb =require('mongodb')
const urlMongo= require('../config/config').urlMongo

const mongoClient=mongodb.MongoClient
mongoClient.connect(urlMongo)

module.exports=mongoClient
