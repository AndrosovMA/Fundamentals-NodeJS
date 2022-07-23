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

/** установка  middleware */
// const jsonBodyMiddleware = express.json()
// app.use(jsonBodyMiddleware)




// ===================================================================================
import express from 'express'

const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)



/**V method send */
// определяет самостоятельно какой тип данных передается клиенту
// ! писать более явно код испльзую при необходимости комбинацию send, json


// что бы вернуть строку можно явно указать через JSON
app.get('/number', (req, res) => {
  res.json(200)
})

// можно вернуть разметку
app.get('/html', (req, res) => {
  res.send(`<h1>HTML</h>`)
})

// пример к обращению к псевдо базе данных через URI parameters
const db = {
  courses: [
    {id: 1, title: 'front-end'},
    {id: 2, title: 'back-end'},
    {id: 3, title: 'devops'}
  ]
}

app.get('/courses/:id', (req, res) => {
  const foundCourse = db.courses.find(c => c.id === +req.params.id)
  if (!foundCourse) {
    res.sendStatus(404)
    return
  }
  res.json(foundCourse)
})

// процесс фильтрации на основе query parameters  http://localhost:3000/courses?title=end
app.get('/courses', (req, res) => {
  const foundCourse = db.courses.filter(c => c.title.indexOf(req.query.title as string) > -1)
  if (!foundCourse) {
    res.sendStatus(404)
    return
  }
  res.json(foundCourse)
})

// примеры простого чтения файлов
app.get('/users', (req, res) => {
  res.send('hello users')
})
app.post('/users', (req, res) => {
  res.send('we created  user')
})
app.listen(port, () => {
  console.log(`server app listening port ${port}`)
})

/**VI создание данных в bd */
// подключение middleware - вызовется перед нашим обработчиком req

app.post('/courses', (req, res) => {
  if (!req.body.title) {
    res.sendStatus(400)
    return
  }

  let newCourses = {
    id: +(new Date()),
    title: req.body.title
  }

  db.courses.push(newCourses)

  res.status(201)
    .send(db)
})

/*  вид запроса через fetch
 fetch('http://localhost:3000/courses', { method: 'POST', body: JSON.stringify({title: 'testing'}),
headers: {
 'content-type': 'application/json'
}})
 .then(res => res.json())
 .then(json => console.log(json))
 */


/**удаление данных в bd  delete*/
app.delete('/courses/:id', (req, res) => {
  const courses = db.courses.filter(c => c.id !== +req.params.id)

  res.sendStatus(204) //now content
  res.send(db)
  console.log(db)
})

/*  вид запроса через fetch
 fetch('http://localhost:3000/courses/1', { method: 'DELETE'} ),
 .then(res => res.json())
 .then(json => console.log(json))
 */

