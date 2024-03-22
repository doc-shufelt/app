import {
  Source
} from '../Audit/types/enums'
import Validation from '../Validation/Validation'
import Transformation from '../Transformation/Transformation'
import Flag from '../Flag/Flag'

export default class Audit {

  protected originalValue: any
  protected originalSource: Source
  protected pastValues: any[] = []
  protected pastSources: Source[] = []
  protected transformations: Transformation[] = []
  protected validations: Validation[] = []
  protected flags: Flag[] = []
  protected flagged: boolean = false
  readonly created = new Date().toISOString()
  protected modified: string

  constructor(
    originalValue: any,
    originalSource?: Source,
    pastValues?: string[],
    pastSources?: Source[],
    transformations?: Transformation[],
    validations?: Validation[],
    flags?: Flag[],
    flagged?: boolean,
    modified?: string,
    created?: string
  ) {
    this.originalValue = originalValue
    this.originalSource = originalSource || Source.Finch
    this.pastValues = pastValues || []
    this.pastSources = pastSources || []
    this.transformations = transformations || []
    this.validations = validations || []
    this.flags = flags || []
    this.flagged = flagged || false
    this.created = new Date().toISOString()
    this.modified = modified || new Date().toISOString()
  }
  // setter and getter for originalValue
  setOriginalValue(value: any): void {
    this.setOriginalValue = value
  }
  getOriginalValue: any = () => this.originalValue
  
  // setter and getter for originalSource
  setOriginalSource(source: Source) {
    this.originalSource = source
  }
  getOriginalSource = () => this.originalSource

  // setter and getter for flag
  addFlag(flag: Flag): void {
    this.flags.push(flag)
  }
  getFlags = () => this.flags
 
  // setter and getter for pastValues
  addPastValue(value: any) {
    this.pastValues.push(value)
  }
  getPastValues = () => this.pastValues

}