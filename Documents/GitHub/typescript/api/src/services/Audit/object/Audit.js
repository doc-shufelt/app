export default async function Audit() {
  const Audit = {}
  Object.defineProperties(Audit, {
    originalValue: {
      value: null,
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
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    },
    pastSources: {
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    },
    validationsPerformed: {
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    },
    transformsExecuted: {
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    },
    flagged: {
      value: false,
      writable: true,
      enumerable: true,
      configurable: false
    },
    flags: {
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    }
  })
  return Audit
}