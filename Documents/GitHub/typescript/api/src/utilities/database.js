import {
  MongoClient,
  ServerApiVersion
} from 'mongodb';

export default async function connectToDatabase() {
  const user = process.env.MONGODB_USER
  const password = process.env.MONGODB_PASSWORD
  const cluster = process.env.MONGODB_CLUSTER
  const uri = `mongodb+srv://${ user }:${ password }@cluster0.${ cluster }.mongodb.net/?retryWrites=true&w=majority`

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })
  return client
}