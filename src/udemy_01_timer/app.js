// глобальная переменная performance позволяющая выдать текуще время относительно запуска кода
const {performance} = require('perf_hooks');
const start = performance.now()


setTimeout(()=> {
  console.log('Прошла секунда: ', performance.now() -  start)
}, 1000)


// отмена таймера
const timerID = setTimeout(()=> {
  console.log('BOOM');
}, 5000)

setTimeout(() => {
  clearTimeout(timerID)
  console.log('ликвидировано');
}, 1000)


// когда использовать setTimeout - запрос к серверу, если сервер не дал ответ за 30 сек, отменить запрос и перенаправить на другой запрос

// отмена таймера и возрат к выполнению через ref
const timerID_2 = setTimeout(() => {
  console.log('timerID is done')
}, 3000)
timerID_2.unref()

setImmediate(()=> {
   timerID_2.ref()
}, 3000)

