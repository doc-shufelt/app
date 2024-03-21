/* imports */
import {
  MongoClient
} from 'mongodb'
import DatabaseController from '../../../../Database/controllers/DatabaseController.js'
import PropertyConfig from '../../../config/PropertyConfig.js'
import Property from '../../../object/Property.js'
import PropertyController from '../../PropertyController.js'

/**
 * @param { object } updateDocument
 * @param {object} mongoClient
 * @returns 
 */
export default async function editProperty(updateDocument, mongoClient) {
  const collection = 'properties'
  const transformMethods = PropertyConfig.methods.transformations
  const validationMethods = PropertyConfig.methods.validations
  const property = await PropertyController.getPropertyById(updateDocument._id, mongoClient)
  const originalValue = property['propertyValue']
  property.audit.pastValues.push(originalValue)
  property.propertyValue = updateDocument.propertyValue
  await PropertyController.transformProperty(property, transformMethods)
  await PropertyController.validateProperty(property, validationMethods)
  const editedProperty = DatabaseController.update(property._id, property, collection, mongoClient)
  return editedProperty
}