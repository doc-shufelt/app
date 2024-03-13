
export default async function Audit( audit ) {
    const Audit = {}
    Object.defineProperties( Audit, {
        originalValue: {
            value: audit.originalValue ?? null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        originalSource: {
            value: 'finch',
            writable: true,
            enumerable: true,
            configurable: false
        },
        pastValues: {
            value: audit.pastValues ?? new Array(),
            writable: true,
            enumerable: true,
            configurable: false
        },
        pastSources: {
            value: audit.pastSources ?? new Array(),
            writable: true,
            enumerable: true,
            configurable: false
        },
        validationsPerformed: {
            value: audit.validationsPerformed ?? new Array(),
            writable: true,
            enumerable: true,
            configurable: false
        },
        transformsExecuted: {
            value: audit.transformsExecuted ?? new Array(),
            writable: true,
            enumerable: true,
            configurable: false
        },
        flagged: {
            value: audit.flagged ?? false,
            writable: true,
            enumerable: true,
            configurable: false
        },
        flags: {
            value: audit.flags ?? new Array(),
            writable: true,
            enumerable: true,
            configurable: false
        },
        created: {
            value: new Date().toUTCString(),
            writable: false,
            enumerable: true,
            configurable: false
        },
        modified: {
            value: new Date().toUTCString(),
            writable: true,
            enumerable: true,
            configurable: false
        }
    })
    return Audit
}