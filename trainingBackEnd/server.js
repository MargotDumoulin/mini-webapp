const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 3000


/////////////////
// BEGIN SETUP //
/////////////////

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:',(err) => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log('Connected to the in-memory SQlite database.');
    createTable()
  }

});

function createTable() {
  const sql =  `CREATE TABLE  IF NOT EXISTS clients (
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   firstname VARCHAR,
                   name VARCHAR
                 )`
  console.log("Statut de la base des clients :", db)

  db.run(sql, (err) => {
    if (!err) {
      console.log("Bien créé")
    } else {
      console.log("Mal créé:", db)
    }
  })

}

// END SETUP //

////////////////////////////////////////
// FUNCTIONS ASSOCIATED TO THE ROUTES //
////////////////////////////////////////

//register a new reservation in the database
const clientRegister = (req, res) => {
  //console.log("Req body reçu :" , req)
  const data = req.body

  console.log(data)

  //retrieving data
  const firstname = data.firstname
  const name = data.lastname

  //preparing the request
  const prep = db.prepare('INSERT INTO clients (firstname, name) VALUES (?,?)', (err) => {
    if (!err) {
      //executing the request
      prep.run(firstname,name, (err) => {
        if (!err) {
          console.log("Client bien ajouté")
          res.sendStatus(204)
        } else {
          console.log("Client pas ajouté")
        }
      })
      prep.finalize()
    } else {
      console.log("Requête mal préparée")
    }
  })

}

//retrieve all the reservations
const clientRetrieve = (req, res) => {
  db.all('SELECT id, firstname, name FROM clients',[], (err, rows) => {
  if (err) {
    console.log("On arrive pas à lire dans ta putain de db bolosse")
  } else {
    res.json(rows)
  }
 })
}




app.post('/register-client', clientRegister)
app.get('/retrieve-clients', clientRetrieve)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
