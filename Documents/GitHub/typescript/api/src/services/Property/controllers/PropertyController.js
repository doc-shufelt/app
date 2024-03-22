/* imports */
import makeProperties from './src/makeProperties/makeProperties.js'
import savePropertyBulk from './src/savePropertyBulk/savePropertyBulk.js'
import editProperty from './src/editProperty/editProperty.js'
import updatePropertyBulk from './src/updatePropertyBulk/updatePropertyBulk.js'
import transformProperty from './src/transformProperty/transformProperty.js'
import validateProperty from './src/validateProperty/validateProperty.js'
import getPropertyById from './src/getPropertyById/getPropertyById.js'
import getProperties from './src/getProperties/getProperties.js'

const PropertyController = {
  makeProperties,
  savePropertyBulk,
  editProperty,
  updatePropertyBulk,
  transformProperty,
  validateProperty,
  getPropertyById,
  getProperties
}

export default PropertyController