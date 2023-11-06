import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connectToMongoDb() {
  
  const user = process.env.MONGODB_USER
  const password = process.env.MONGODB_PASSWORD
  const uri = 'mongodb+srv://' + user + ':' + password + '@cluster0.zw47mqi.mongodb.net/?retryWrites=true&w=majority'
  console.log(uri)
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  await client.connect()
  return client
  
}
