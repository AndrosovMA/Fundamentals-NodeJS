/** Переменные окружения */
// npm i dotenv - для создания переменных окружения
const dotenv = require('dotenv')
dotenv.config()

// для того что бы при запуске передавать переменные окружеению в package.json необходимо установить пакет npm i cross-env

// env - переменные окружения
console.log(process.env.PORT);
console.log(process.env.NODE_ENV); // для указания режима разработки




/** process - глобальный объект с помощью которого мы можем получить информацию о текущем процессе */
//уникальный идентификатор (id) текущего просесса
console.log(process.pid);

//аргументы которые мы можем указывать при запуске программы
console.log(process.argv) // в cmd - node index.js one 555 666j




/** работа с путями абсолютными или относительными */
const path = require('path');
console.log(path.join('fist', 'second'))


//! cls - отчистить командную строку


