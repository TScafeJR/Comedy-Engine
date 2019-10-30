const readline = require('readline');
const fs = require('fs');

const objToCSV = obj => {
    const keys = Object.keys(obj);
    let str = '';

    keys.forEach(key => {
        str += `${key}, ${obj[key]}\n`;
    });

    return str;
};

const arrayToCSV = objArray => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    const str = `${Object.keys(array[0]).map(value => `"${value}"`).join(',')}` + '\r\n';

    return array.reduce((str, next) => {
        str += `${Object.values(next).map(value => `"${value}"`).join(',')}` + '\r\n';
        return str;
    }, str);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Please enter a file to convert: ', input => {
    const fileToConvert = input.replace('.json', '');
    const pathToFile = `data/json/${fileToConvert}.json`;
    if (fs.existsSync(pathToFile)) {
        const jsonFile = require(`../../${pathToFile}`);
        const csvFile = objToCSV(jsonFile);
        fs.writeFileSync(`data/csv/${fileToConvert}.csv`, csvFile);
    } else
        console.error(`${fileToConvert}.json does not exist! Please try another file`);



    rl.close();
});
