import createAudit from './createAudit.js'

describe( 'test', () => {
    test('connecting to createAudit method', () => {
        const result = createAudit()
        console.log(result)
        expect( result ).toBe( 100 )
    })
})
