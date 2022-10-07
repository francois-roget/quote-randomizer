import Quotes from './quotes.json';
export const getRandomQuote = () => {
    return getQuoteInList(Quotes);
};
export const getRandomQuoteFrom = (author) => {
    const filteredQuotes = Quotes.filter((q) => q.author === author);
    if (filteredQuotes.length === 0) {
        return null;
    }
    return getQuoteInList(filteredQuotes);
};
const getQuoteInList = (quotes) => {
    const randomIndex = randomInteger(0, quotes.length - 1);
    return quotes[randomIndex];
};
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default {
    getRandomQuote,
    getRandomQuoteFrom,
};
