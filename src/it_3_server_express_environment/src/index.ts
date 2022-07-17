/**I Установака основного окружения */
// установить библиотеку Express
// 1) yarn init - для отображения package.json
// 2) yarn add express
// 3) yarn add nodemon -D   - для автоматического отображения
        // yarn nodemon index.js - для запуска


/**II отладка приложения (mon - monitoring) */
// yarn nodemon --inspect index.js


/**III установка TypeScript */
// yarn add typescript ts-node @types/express @types/node -D

/**IV правильно проинициализирвать файл  TypeScript */
// yarn tsc -init
// yarn tsc -w  компиляция в js при изменени файлов (w - watch)
// если нужно скомпилировать файл yarn tsc index.ts


import express from 'express'

const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users', (req, res) => {
  res.send('hello users')
})

app.post('/users', (req, res) => {
  res.send('we created  user')
})