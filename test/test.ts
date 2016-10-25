//function toChr(c) {
//    if (typeof c === 'number') {
//        return String.fromCharCode(c);
//    }
//
//    if (typeof c === 'string') {
//        return c;
//    }
//
//    console.warn('wat?', c);
//    return c;
//}
//
//function toStr(arr) {
//    if (!Array.isArray(arr)) {
//        return arr;
//    }
//
//    return arr.map(toChr).join('');
//}
//
//function test(obj) {
//    console.log('he', toStr(obj.he));
//    console.log('ar', toStr(obj.expected));
//
//    obj.he.map(x =>
//            typeof x === 'number' ?
//            String.fromCharCode(x) :
//            x
//            ).join('');
//    console.log();
//}
//
//test({
//    he: [
//        HE.SHIN,
//        HE.MEM,
//        HE.YOD,
//        ' ',
//        HE.YOD,
//        HE.RESH,
//        HE.VAV,
//        HE.SAMEKH,
//        HE.LAMED,
//        HE.BET
//    ],
//    expected: [
//        AR.SHIN,
//        AR.MIM,
//        AR.YA,
//        ' ',
//        AR.YA,
//        AR.RA,
//        AR.WAW,
//        AR.SAAD,
//        AR.LAM,
//        AR.BA
//    ]
//});
