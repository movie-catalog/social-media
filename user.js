var express = require('express')
var fs = require('fs')
const mysql = require("mysql")

var router = express.Router({
  mergeParams: true
})
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "social_media"
})

//------------------------------------------------------- read
router.get('/', function (req, res) {
  connection.query("SELECT * FROM user", (error, results, fields) => {
    if (error) throw error
    res.json(results)
  })
})

//------------------------------------------------------- create
router.post('/',(req,res) => {
  connection.query(`
      INSERT INTO user (username,email,password,first_name,last_name,nickname,gender,birth_date,current_city,hometown)
      VALUES("${req.body.username}","${req.body.email}","${req.body.password}","${req.body.first_name}","${req.body.last_name}",
        "${req.body.nickname}","${req.body.gender}","${req.body.birth_date}","${req.body.current_city}","${req.body.hometown}");
    `, (error, results, fields) => {
    if (error) throw error
    console.log(results);
  })
  res.end();
})

//------------------------------------------------------- update
router.delete('/:column/:value',(req,res) => {
  connection.query(`DELETE FROM user WHERE ${req.params.column} = ${req.params.value}`, (error, results, fields) => {
    if (error) throw error
    console.log(results);
  })
  res.end()
})

//------------------------------------------------------- delete
router.put('/',(req,res) => {
  var set = "";
  (req.body.username === undefined) ? (set=set) : (set +=  ` username =  "${req.body.username}",`);
  (req.body.email === undefined) ? (set=set) : (set +=  ` email =  "${req.body.email}",`);
  (req.body.first_name === undefined) ? (set=set) : (set +=  ` first_name =  "${req.body.first_name}",`);
  (req.body.last_name === undefined) ? (set=set) : (set +=  ` last_name =  "${req.body.last_name}",`);
  (req.body.nickname === undefined) ? (set=set) : (set +=  ` nickname =  "${req.body.nickname}",`);
  (req.body.gender === undefined) ? (set=set) : (set +=  ` gender =  "${req.body.gender}",`);
  (req.body.birth_date === undefined) ? (set=set) : (set +=  ` birth_date =  "${req.body.birth_date}",`);
  (req.body.current_city === undefined) ? (set=set) : (set +=  ` current_city =  "${req.body.current_city}",`);
  (req.body.hometown === undefined) ? (set=set) : (set +=  ` hometown =  "${req.body.hometown}"`);

  var query = `
    UPDATE social_media.user
    SET ${set} WHERE id = ${req.body.id}
  `
  console.log(query);
  connection.query(query, (error, results, fields) => {
    if (error) throw error
    console.log(results);
  })
  res.end()
})

module.exports = router
