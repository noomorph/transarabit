import AR from './ar';
import HE from './he';

export function toArabic(source: string) {
	const MAP = {
		[HE.ALEF]: AR.ALIF,
		[HE.AYIN]: AR.AYN,
		[HE.BET]: AR.BA,
		[HE.DALET]: AR.DAL,
		[HE.GIMEL]: AR.JIM,
		[HE.HE]: AR.HA,
		[HE.HET]: AR.KHA,
		[HE.KAF]: AR.KAF,
		[HE.KAF_SOFIT]: AR.KAF,
		[HE.LAMED]: AR.LAM,
		[HE.MEM]: AR.MIM,
		[HE.MEM_SOFIT]: AR.MIM,
		[HE.NUN]: AR.NUN,
		[HE.NUN_SOFIT]: AR.NUN,
		[HE.PE]: AR.FA,
		[HE.PE_SOFIT]: AR.FA,
		[HE.QOF]: AR.QAF,
		[HE.RESH]: AR.RA,
		[HE.SAMEKH]: AR.SIN,
		[HE.SHIN]: AR.SHIN,
		[HE.TAV]: AR.TA,
		[HE.TET]: AR.TTA,
		[HE.ZADI]: AR.SAAD,
		[HE.ZADI_SOFIT]: AR.SAAD,
		[HE.VAV]: AR.WAW,
		[HE.YOD]: AR.YA,
		[HE.ZAYIN]: AR.ZAYN,
		// [HE.DAGESH]: '',
		// [HE.MAPIQ]: '',
		// [HE.DAGESH_OR_MAPIQ]: '',
		// [HE.HATAF_PATACH]: '',
		// [HE.HATAF_QAMAZ]: '',
		// [HE.HATAF_SEGOL]: '',
		// [HE.HIRIQ]: '',
		// [HE.HOLAM]: '',
		// [HE.METEG]: '',
		// [HE.PATACH]: '',
		// [HE.QAMAZ]: '',
		// [HE.QUBBUZ]: '',
		// [HE.RAFE]: '',
		// [HE.SEGOL]: '',
		// [HE.SHEVA]: '',
		// [HE.SHIN_DOT]: '',
		// [HE.SIN_DOT]: '',
		// [HE.ZEIRE]: '',
		// [HE.GERESH]: "'",
		// [HE.GERSHAYIM]: '"',
		// [HE.MAQAF]: '-',
		// [HE.PASEQ]: '',
		// [HE.SOF_PASUQ]: '',
	};

	return source
		.replace(/./g, function (c) {
			const code = c.charCodeAt(0);
			if (MAP.hasOwnProperty(String(code))) {
				return String.fromCharCode(MAP[code]);
			}
			return c;
		});
}

function toHebrew(source) {
	return source;
}

const directions = {
	toArabic,
	toHebrew,
	default: x => x || ''
};

// function transliterate(source = '', direction = 'toArabic') {
// 	const fn = directions[direction] || directions.default;
// 	return fn(source);
// }
