const text = "Сонце вже сідало за обрій, фарбуючи небо в ніжно-рожевий колір. Дерева тихо шуміли під легким вітерцем, нагадуючи про спокій природи. У далині чути було спів птахів, що готувалися до ночі. Все навколо дихало гармонією та затишком.";

const arrayText = text.split(' ');

const modifiedArray = arrayText.map((item, idx) => idx === 2 ? item = `${item.split('').map(item => `-${item}`).join('')}` : item);
let singleSpaceCount = (text.match(/ /g) || []).length;
console.log('Text: ', text);
console.log('Modified text: ', modifiedArray.join(' '));
console.log('Amount of single space: ', singleSpaceCount);