"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuoteFrom = exports.getRandomQuote = void 0;
const quotes_json_1 = __importDefault(require("./quotes.json"));
const getRandomQuote = () => {
    return getQuoteInList(quotes_json_1.default);
};
exports.getRandomQuote = getRandomQuote;
const getRandomQuoteFrom = (author) => {
    const filteredQuotes = quotes_json_1.default.filter((q) => q.author === author);
    if (filteredQuotes.length === 0) {
        return null;
    }
    return getQuoteInList(filteredQuotes);
};
exports.getRandomQuoteFrom = getRandomQuoteFrom;
const getQuoteInList = (quotes) => {
    const randomIndex = randomInteger(0, quotes.length - 1);
    return quotes[randomIndex];
};
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = {
    getRandomQuote: exports.getRandomQuote,
    getRandomQuoteFrom: exports.getRandomQuoteFrom,
};
