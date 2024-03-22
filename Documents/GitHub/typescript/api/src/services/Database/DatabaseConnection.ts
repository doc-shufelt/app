import { 
  MongoClient, 
  ServerApiVersion 
} from 'mongodb'

export default class DatabaseConnection {
  readonly user: string
  readonly password: string
  readonly cluster: string
  readonly uri: string
  readonly client: MongoClient
  constructor() {
    this.user = <string> process.env.MONGODB_USER
    this.password = <string> process.env.MONGODB_PASSWORD
    this.cluster = <string> process.env.MONGODB_CLUSTER
    this.uri = <string> `mongodb+srv://${ this.user }:${ this.password }@cluster0.${ this.cluster }.mongodb.net/?retryWrites=true&w=majority`
    this.client = <MongoClient> new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
    return this.client
  }
}