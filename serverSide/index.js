const express = require("express");
const app = express();

// add dotenv file
require("dotenv").config();

// Middleware add
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Mongodb connection
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client side live port
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster0.epye2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // Data Received for Client site
    const userCollection = client.db("coffeedb").collection("coffee");
    // STEP: 1(Post);
    app.post("/add-coffee", async (req, res) => {
      const user = req.body;
      console.log("Client site Hitting for server side");
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // STEP: 2(Get);
    app.get("/all-coffee", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // STEP: 3(Update);
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });

    // Step-2
    app.put("/updateCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const coffee = req.body;
      console.log(coffee);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: coffee.name,
          chef: coffee.chef,
          supplier: coffee.supplier,
          test: coffee.test,
          category: coffee.category,
          image: coffee.image,
        },
      };
      const result = await userCollection.updateOne(
        filter,
        updatedUser,
        options
      );
      res.send(result);
    });

    // STEP: 4(Delete);
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

// এটি Browser এ run হবে ঃ http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Living with Programming: Sanu");
});
// cmd তে server run হবে ঃ nodemon index.js
app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
