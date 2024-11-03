const alphabet = [
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 
    'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 
    'Ь', 'Ю', 'Я'
];

const encryptWord = (word) => word.split('').map(item => item = alphabet[alphabet.indexOf(item.toUpperCase())] === 'Я' ? 'А' : alphabet[alphabet.indexOf(item.toUpperCase()) + 1]).join('');

const userWord = prompt('Enter your word')
console.log('Слово: ', userWord);
console.log(encryptWord(userWord)) 