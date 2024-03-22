import docparser from 'docparser-node'

/**
 * 
 * @param {*} parser 
 * @param {*} documentId 
 */
export default async function parseDocument(parser, documentId) {
  const client = new docparser.Client(process.env.DOCPARSER_API_SECRET_KEY)
  const results = await client.getResultsByDocument(parser, documentId, {
    format: 'object'
  })
  console.log(results)
  return results
}