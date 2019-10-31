const chai = require('chai');
const { normalize, getMaxAndMin, sanitizeStr } = require('../../src/helpers/helpers');

const { expect } = chai;

describe('Helpers', () => {
    describe('normalize', () => {
        it('is able to scalarly normalize', () => {
            const midpoint = normalize(5, 0, 10);
            expect(midpoint).to.eql(.5);
        });
    });

    describe('getMaxAndMin', () => {
        const inputData = [
            4, 5, 6, 7, 8, 6, 4, 3, 45, 5, 6, 7, 8,
            5, 34, 6, 65, 67, 8, 8, 6, 6, 7, 7, 5, 4,
            5, 3, 2, 2, 3, 9, 99, 8, 908, -3, -2
        ];

        it('returns an object with min and max keys', () => {
            const expectedObj = getMaxAndMin(inputData);
            expect(expectedObj).to.be.an('object');
            expect(expectedObj).all.keys('min', 'max');
        });

        it('can grab the expected max and min', () => {
            const { max, min } = getMaxAndMin(inputData);
            expect(min).to.eql(-3);
            expect(max).to.eql(908);
        });
    });

    describe('sanitizeStr', () => {
        it('filters out non-word characters', () => {
            const inputStr = 'A bad string: 😈';
            const expectedStr = 'A bad string';
            const filteredStr = sanitizeStr(inputStr);

            expect(filteredStr).to.eql(expectedStr);
        });

        it('trims empty space off the end and the beginning of the string', () => {
            const inputStr = ' A couple of extra spaces ';
            const expectedStr = 'A couple of extra spaces';
            const filteredStr = sanitizeStr(inputStr);

            expect(filteredStr).to.eql(expectedStr);
        });
    });
});
