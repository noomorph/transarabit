// function update(direction) {
//     const [from = 'he', to = 'ar'] = direction.split('-');
//     const [fromInput, toInput] = [
//         document.getElementById(from),
//         document.getElementById(to)
//     ];
//
//     fromInput.readOnly = false;
//     toInput.readOnly = true;
//     toInput.value = transliterate(fromInput.value);
// }
//
// const $ = document.querySelector.bind(document);
// $('#he-ar').addEventListener('change', e => update(e.target.value));
// $('#ar-he').addEventListener('change', e => update(e.target.value));
// $('#he').addEventListener('input', () => update('he-ar'));
// $('#ar').addEventListener('input', () => update('ar-he'));
