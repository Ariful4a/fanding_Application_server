const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5eg9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db("FundingDB");
        const FundingCollection = database.collection("Funding");
        const FundingDonateCollection = database.collection("FundingDonate");

    app.post('/campaign', async (req, res) => {
        const addCampaign = req.body;
        // console.log(addCampaign);
        const result = await FundingCollection.insertOne(addCampaign);
        res.send(result);
    });


    // data read 
    app.get('/campaign', async (req, res) => {
        const rusult = await FundingCollection.find().toArray();
        res.send(rusult);
    })

    // data read by id
    app.get('/campaign/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await FundingCollection.findOne(query);
        res.send(result);
    })

    // data update by id
    // app.put('/campaign/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const query = { _id: new ObjectId(id) };
    //     const update = req.body;
    // //     const result = await FundingCollection.updateOne(query, { $set: update });
    // //     res.send(result);
    // // })

    // // data delete by id
    // app.delete('/campaign/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const query = { _id: new ObjectId(id) };
    //     const result = await FundingCollection.deleteOne(query);
    //     res.send(result);
    // })

    // fanding donate 
    app.post('/donate', async (req, res) => {
        const result = await FundingDonateCollection.insertOne(req.body);
        res.send(result);
    })

    // data read by id
    app.get('/donate', async (req, res) => {
        const result = await FundingDonateCollection.find().toArray();
        res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
