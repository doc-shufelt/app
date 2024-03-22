/**
 * 
 * @param {object} Property 
 * @param {array} transformationMethods 
 * @returns {Promise<object>} 
 */
export default async function transformProperty(Property, transformationMethods) {
	if (Property.hasOwnProperty('transformsToExecute') && Property.transformsToExecute.length > 0) {
		for (let transformation of Property.transformsToExecute) {
			const transform = (transformationMethods[transformation]).call(this, Property.propertyValue)
			if (transform) {
				if (Property.propertyValue != null) {
					Property.audit.pastValues.push(Property.propertyValue)
				}
				Property.propertyValue = transform.transformedValue
				Property.audit.transformsExecuted.push(transform)
			}
		}
	}
	return Property
}