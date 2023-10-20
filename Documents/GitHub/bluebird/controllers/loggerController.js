/**
 * Logger Controller
 */

import { EventEmitter } from 'events'

const emitter = new EventEmitter()

emitter.on( 'request', ( request ) => {
    const requestEvent = {
        _id: 'uuid',
        baseUrl: request.baseUrl,
        method: request.method,
        body: request.body.requests,
        params: request.params,
        timestamp: Date.now()
    }
    console.log( requestEvent ) 
} )
emitter.on( 'response',  ( response ) => {
    const responseEvent = {
        _id: 'newuuid',
        status: response.status,
        recordCount: response.recordCount,
        data: response.data,
        timestame: Date.now()
    }
    console.log( responseEvent )
})

export default emitter