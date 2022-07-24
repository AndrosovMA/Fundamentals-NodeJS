const {performance} = require('perf_hooks');

const perf_hooks = require('perf_hooks');
const testPer = perf_hooks.performance.timerify(test);


const performanceObserver = new perf_hooks.PerformanceObserver((item, observer) => {
  console.log(item.getEntries());
  // const entry = item.getEntriesByName('slow').pop();
  // console.log(`${entry.name}: ${entry.duration}`);
  observer.disconnect()
})
performanceObserver.observe({entryTypes: ['measure', 'function']})



function slow() {
  performance.mark('start')
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i)
  }
  performance.mark('end')
  performance.measure('slow', 'start', 'end')
}
slow();


//второй способ измерения функции целиком timerify
function test() {
  const arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i)
  }
}
testPer();
console.log((testPer));