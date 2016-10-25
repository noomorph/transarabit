import HE from '../src/he';
import AR from '../src/ar';
import {toArabic} from '../src/main';
import {expect} from 'chai';

describe('should transliterate', () => {
	from_to(HE.ALEF, AR.ALIF);

	function from_to(fromCode: number, toCode: number, _it: Mocha.ITestDefinition = it) {
		const fromChr = String.fromCharCode(fromCode);
		const toChr = String.fromCharCode(toCode);

		_it(`${fromChr} => ${toChr}`, () => {
			expect(toArabic(fromChr)).to.eq(toChr);
		});
	}
});