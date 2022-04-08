const { response } = require('express');
const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
const PORT = 3000;
let cors = require('cors');
const DATABASE_NAME = "Lab7";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Raison163:jjd4oyOVgdploCt4@cluster0.wwtgv.mongodb.net/Lab5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

/* This is where the Angular files live after they are built.  */
app.use(express.static(path.join(__dirname, './d3/dist/d3')))
.use(cors());;


app.listen(PORT, () => {
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }, (error, client) => {
      if(error) {
          throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("Pokemon_data");
      console.log("Connected to `" + DATABASE_NAME + "`!");
  });

  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
});



//GET REQUEST /db
app.get("/db", (req, res) => {
  collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      res.send(result);
  })
});
