import Quotes from './quotes.json';

export type Quote = {
	text: string;
	author: string;
};

export const getRandomQuote = (): Quote => {
	return getQuoteInList(Quotes);
};

export const getRandomQuoteFrom = (author: string): Quote | null => {
	const filteredQuotes = Quotes.filter((q) => q.author === author);
	if (filteredQuotes.length === 0) {
		return null;
	}
	return getQuoteInList(filteredQuotes);
};

const getQuoteInList = (quotes: Quote[]): Quote => {
	const randomIndex = randomInteger(0, quotes.length - 1);
	return quotes[randomIndex];
};

const randomInteger = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
	getRandomQuote,
	getRandomQuoteFrom,
};
