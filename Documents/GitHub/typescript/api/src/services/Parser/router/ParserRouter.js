import express from 'express'
import ParserController from '../../Parser/controllers/ParserController.js'

const ParserRouter = express.Router()

ParserRouter.post(`/upload`, async (req, res) => {
  try {
    const results = await ParserController.uploadDocument(req.body.parser, req.body.url)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

ParserRouter.post(`/results`, async (req, res) => {
  try {
    const results = await ParserController.parseDocument(req.body.parser, req.body.documentId)
    return res.status(200).send(results)
  } catch (error) {
    return res.status(400).send(error)
  }
})

export default ParserRouter