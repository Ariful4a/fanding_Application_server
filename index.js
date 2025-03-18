const dotenv = require('dotenv');
dotenv.config();
const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
const express = require('express')
const cors = require('cors');
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
    // await client.connect();

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

    // home page campaigns show 6 data 
    app.get('/homeCampaigns', async (req, res) => {
      try {
          const result = await FundingCollection.find().limit(6).toArray();
          res.send(result);
      } catch (error) {
          console.error("Error fetching campaigns:", error);
          res.status(500).send("Internal Server Error");
      }
  });

    // data all read 
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
    app.put('/campaign/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const update = req.body;
        const updateCampaign = {
            $set: {
                title: update.title,
                description: update.description,
                photo: update.photo,
                minDonation: update.minDonation,
                startDate: update.startDate,
                deadline: update.deadline,
                type: update.type
            }
        }
        const result = await FundingCollection.updateOne(query, updateCampaign, options);
        res.send(result);
    })

    // // data delete by id
    app.delete('/campaign/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await FundingCollection.deleteOne(query);
        res.send(result);
    })

    // fanding donate 
    app.post('/donate', async (req, res) => {
        const result = await FundingDonateCollection.insertOne(req.body);
        res.send(result);
    })

    // data read by 
    app.get('/donate', async (req, res) => {
        const result = await FundingDonateCollection.find().toArray();
        res.send(result);
    })

       // My Campaigns - Filter by user email
       app.get('/myCampaigns', async (req, res) => {
        const userEmail = req.query.email;
        // console.log('User Email:', userEmail); 
        if (!userEmail) {
          return res.status(400).send({ message: 'Email is required' });
        }
    
        try {
          const query = { userEmail }; 
          const result = await FundingCollection.find(query).toArray();
          console.log('Fetched Campaigns:', result); 
          res.send(result);
        } catch (error) {
          res.status(500).send({ message: 'Server error', error });
        }
    });

    // top 3 campaigns
    app.get('/topCampaigns', async (req, res) => {
      try {
          const result = await FundingCollection.aggregate([
              {
                  $addFields: {
                      minDonation: { $toDouble: "$minDonation" } 
                  }
              },
              { $sort: { minDonation: -1 } }, 
              { $limit: 3 } 
          ]).toArray();
  
          res.send(result);
      } catch (error) {
          console.error("Error fetching campaigns:", error);
          res.status(500).send("Internal Server Error");
      }
  });
  

    // My Donate Campaigns - Filter by user email
    app.get('/myDonateCampaigns', async (req, res) => {
      const donarEmail = req.query.email;
      console.log('Donar Email:', donarEmail); 
      
      if (!donarEmail) {
          return res.status(400).send({ message: 'Email is required' });
      }
  
      try {
          const query = {  donarEmail: donarEmail };
          const result = await FundingDonateCollection.find(query).toArray();
          console.log('Fetched Campaigns:', result); 
          res.send(result);
      } catch (error) {
          res.status(500).send({ message: 'Server error', error });
      }
  });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
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