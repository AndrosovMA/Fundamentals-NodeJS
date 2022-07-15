const fs = require('fs');
const path = require('path');

const study = {
  age: 35,
  name: 'max',
  developer: 'backend'
}

// fs.writeFile('study.json', JSON.stringify(study), (err) => {
//   if (err) console.log('Error')
// })


/** Читаем JSON файл */
// const student = require('./study.json')
// console.log(student);


/** Читаем CSV - command separate value файл */
// устанавливаем npm i csv-parser
const csv = require('csv-parser');

const results = [];

fs.createReadStream('table.csv')
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', () => {
  console.log(results);
});


/** Пишем CSV - command separate value файл */
// устанавливаем npm i csv-writer

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'test.csv',
  header: [
    {id: 'name', title: 'NAME'},
    {id: 'lang', title: 'LANGUAGE'}
  ]
});

const records = [
  {name: 'Bob',  lang: 'French, English'},
  {name: 'Mary', lang: 'English'}
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
      console.log('...Done');
    });