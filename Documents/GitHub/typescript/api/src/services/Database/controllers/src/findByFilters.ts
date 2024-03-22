import { Collection, Document, FindCursor, MongoClient } from "mongodb"

export default async function findByFilters(filters: object, table: string, projection: object, mongoClient: MongoClient): Promise<array> {
  const collection: Collection<Document> = await mongoClient.db('bluebird').collection(table)
  const results: FindCursor<Document> = await collection.find(filters).project(projection)
  return results.toArray()
}