const encryptWord = (word) => {
    const workingPart = word.split('').slice(1, word.length - 1).reverse().join('');
    const result = word[0] + workingPart + word[word.length - 1];
    return result;
};

console.log(encryptWord('Ігор'))