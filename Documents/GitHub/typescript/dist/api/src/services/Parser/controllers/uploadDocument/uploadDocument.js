var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import docparser from 'docparser-node';
export default function uploadDocument(parser, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new docparser.Client(process.env.DOCPARSER_API_SECRET_KEY);
        client.fetchDocumentFromURL(parser, url, {})
            .then(function (result) {
            console.log('yay');
            console.log(result);
            return result;
        })
            .catch(function (error) {
            console.log(error);
            return error;
        });
    });
}
