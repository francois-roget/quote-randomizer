import 'mocha';
import { assert } from 'chai';

import { getRandomQuote, getRandomQuoteFrom } from '..';
import npmPackage from '..';

describe('NPM Package', () => {
	it('should be an object', () => {
		assert.isObject(npmPackage);
	});

	it('should have a helloWorld property', () => {
		assert.property(npmPackage, 'getRandomQuote');
	});
});

describe('Random Quotes', () => {
	it('should return a quote', () => {
		const quote = getRandomQuote();
		assert.isObject(quote, 'getRandomQuote should return an object');
		assert.isString(quote.text, 'Quote should have a text');
		assert.isString(quote.author, 'Quote should have an author');
	});
});

describe('Random Quotes from author', () => {
	it('should return a quote from the requested author', () => {
		const quote = getRandomQuoteFrom('Unknown');
		assert.isObject(quote, 'getRandomQuote should return an object');
		assert.isNotNull(quote);
		assert.isString(quote?.text, 'Quote should have a text');
		assert.isString(quote?.author, 'Quote should have an author');
		assert.equal(quote?.author, 'Unknown');
	});

	it('should return null for non-present author', () => {
		const quote = getRandomQuoteFrom('not-an-author');
		assert.isNull(quote);
	});
});
