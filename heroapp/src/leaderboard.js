
const React = require('react');
const axios = require('axios');
const {MongoClient} = require('mongodb');
const { Leaderboard } = ("@gamestdio/leaderboard");

async function LeaderBoard() {
  
    const URI = "mongodb+srv://mindwack:Tekka2021!@cluster0.s0nic.mongodb.net/test";
    const client = new MongoClient(URI);
    const db = client.db("leaderboard");
    
    var  myCursor = db.scores.find( {} )
    try {
      await client.connect();
      await listDatabases(client);
    }
    catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }
 
  console.log(myCursor);
}

