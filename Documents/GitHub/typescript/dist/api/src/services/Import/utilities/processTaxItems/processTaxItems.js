var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param {array} taxLineItems
 * @returns {Promise<object>}
 */
export default function processTaxItems(taxLineItems) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var federalTaxWithholdings = 0;
            var stateTaxWithholdings = 0;
            var ficaTaxWithholdings = 0;
            var additionalTaxWithholdings = 0;
            for (const tax of taxLineItems) {
                switch (tax.type) {
                    case 'federal':
                        federalTaxWithholdings += tax.amount;
                        break;
                    case 'state':
                        stateTaxWithholdings += tax.amount;
                        break;
                    case 'fica':
                        ficaTaxWithholdings += tax.amount;
                        break;
                    default:
                        additionalTaxWithholdings += tax.amount;
                        break;
                }
            }
            return {
                federalTaxWithholdings,
                stateTaxWithholdings,
                ficaTaxWithholdings,
                additionalTaxWithholdings
            };
        }
        catch (error) {
            return error;
        }
    });
}
