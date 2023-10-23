/**
 * Logger Controller
 */
import {v4 as uuidv4} from 'uuid';
import { EventEmitter } from 'events'

const emitter = new EventEmitter()

var processId

emitter.on( 'http-request-received', ( params ) => {
    processId = uuidv4()
    id = uuidv4()
    const httpRequestReceivedEventOutput = {
        id: id,
        event: 'http request received',
        timestamp: params.timestamp
    }
} )
emitter.on( 'http-response-sent',  ( params ) => {
    let id = uuidv4()
    console.log( 'Http Response: ' + id )
})
emitter.on( 'router-invoked', ( params ) => {
    let id = uuidv4()
    const routerInvokedEventOutput = {
        processId: processId,
        id: id,
        event: 'router invoked',
        router: params.router,
        method: params.method,
        timestamp: params.timestamp
    }
    console.log( routerInvokedEventOutput )
})
emitter.on( 'router-returned', ( params ) => {
    let id = uuidv4()
    const routerReturnedEventOutput = {
        processId: processId,
        id: id,
        event: 'router returned',
        router: params.router,
        method: params.method,
        timestamp: params.timestamp
    }
    console.log( routerReturnedEventOutput )
})
emitter.on( 'function-invoked', ( params ) => {
    let id = uuidv4()
    const functionInvokedEventOutput = {
        processId: processId,
        id: id,
        event: 'function invoked',
        module: params.module,
        function: params.function,
        timestamp: params.timestamp
    }
    console.log( functionInvokedEventOutput )
})
emitter.on( 'function-returned', ( params ) => {
    let id = uuidv4()
    const functionReturnedEventOutput = {
        processId: processId,
        id: id,
        event: 'function returned',
        module: params.module,
        function: params.function,
        status: params.status,
        recordsAffected: params.recordCount,
        timestamp: params.timestamp
    }
    console.log( functionReturnedEventOutput )
})

export default emitter