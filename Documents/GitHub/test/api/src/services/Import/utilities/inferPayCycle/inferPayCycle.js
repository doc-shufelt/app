import {
  differenceInDays
} from 'date-fns'

/**
 * 
 * @param { date } startDate 
 * @param { date } endDate 
 * @returns { Promise<string> }
 */
export default async function inferPayCycle(startDate, endDate) {
  const periodDuration = differenceInDays(endDate, startDate)
  var payCycle = null
  if (periodDuration <= 7) {
    payCycle = 'weekly'
  }
  if ((periodDuration > 7) && (periodDuration <= 14)) {
    payCycle = 'bi-weekly'
  }
  if ((periodDuration > 14) && (periodDuration <= 16)) {
    payCycle = 'semi-monthly'
  }
  if (periodDuration > 16) {
    payCycle = 'monthly'
  }
  return payCycle
}