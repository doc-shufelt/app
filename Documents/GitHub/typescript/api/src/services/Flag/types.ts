type FlagType = [
  code: string,
  description: string,
  severity: number
]

enum Status {
  'open' = 0,
  'resolved' = 1,
  'overridden' = 2
}

export { 
  Status, 
  FlagType
}