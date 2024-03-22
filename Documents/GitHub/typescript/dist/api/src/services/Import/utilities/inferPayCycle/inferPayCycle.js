var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { differenceInDays } from 'date-fns';
/**
 *
 * @param { date } startDate
 * @param { date } endDate
 * @returns { Promise<string> }
 */
export default function inferPayCycle(startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const periodDuration = differenceInDays(endDate, startDate);
        var payCycle = null;
        if (periodDuration <= 7) {
            payCycle = 'weekly';
        }
        if ((periodDuration > 7) && (periodDuration <= 14)) {
            payCycle = 'bi-weekly';
        }
        if ((periodDuration > 14) && (periodDuration <= 16)) {
            payCycle = 'semi-monthly';
        }
        if (periodDuration > 16) {
            payCycle = 'monthly';
        }
        return payCycle;
    });
}
