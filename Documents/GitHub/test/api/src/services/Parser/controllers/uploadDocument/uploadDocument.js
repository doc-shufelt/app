import docparser from 'docparser-node'

export default async function uploadDocument(parser, url) {
  const client = new docparser.Client(process.env.DOCPARSER_API_SECRET_KEY)
  client.fetchDocumentFromURL(parser, url, {})
    .then(function (result) {
      console.log('yay')
      console.log(result)
      return result
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
}