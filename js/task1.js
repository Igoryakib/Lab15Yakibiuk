const string = '+++A +++ 0 0 ++ + +0 B++';

const arrayStr = string.split('');
const amountPlus = arrayStr.slice(arrayStr.indexOf('A'), arrayStr.indexOf('B')).reduce((acc, item) => item === '+' ? acc+=1 : acc, 0);
console.log('String A B: ', string);
console.log('Amount of +: ', amountPlus);
console.log('Modified string A B: ', arrayStr.map(item => item === '0' ? item = 'OO' : item).join(''));