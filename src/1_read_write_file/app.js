/** подключение модулей */
// поключить модуль для работы с файлами
const fs = require('fs');

//поключить модуль для работы с путями
const path = require('path')


/**task  - 1 Научиться читать файл - два пути */
// way 1 - асинхронное чтение файла
fs.readFile('t1.txt', 'utf-8', (err, data) => {
  // console.log(data);
});

//way 2 - синхронное чтение файлов
let text =  fs.readFileSync('t2.txt', 'utf-8')
// console.log(text);

// console.log('==============')


/**task  - 2 Научиться читать папки */
fs.readdir('folder_1', (err, data) => {
  console.log(data); // [] файлов
  console.log('extension: ', path.extname(data[0])) // считать расширение файла
  console.log(fs.statSync('folder_1/' + data[0])) // получение данные по файлу
})


/**task  - 3 Научиться записывать файлы */
fs.writeFile('folder_1/newfile.txt', 'gooooooo', (err) => {
  if (err) console.log(err);
})