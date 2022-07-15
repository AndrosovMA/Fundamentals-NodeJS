// установка плагина npm install mysql

const mysql = require('mysql');

// указать конфигурацию пакета

const conn = mysql.createConnection({
  host: "itgit.mysql.tools",
  user: "itgid_nodetest",
  database: "itgit_nodecourse",
  password: "Al6gAi50YiB0"
})

conn.connect(err => {
  if (err) {
    // console.log(err);
    return err;
  } else {
    // console.log('Database ---- ok')
  }
})

// поизучать SQL запросы
let query = "SELECT * FROM user";

conn.query(query, (err, result, field) => {
  console.log(err);
  console.log(result);
  console.log(field);
})

