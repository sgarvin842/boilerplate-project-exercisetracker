const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res) => {
  console.log(req.body.username);
  res.send({ test: "test" });
});

app.post('/api/users/:_id/exercises', (req, res) => {
  console.log(req.body.id);
  console.log(req.body.description);
  console.log(req.body.duration);
  console.log(req.body.date);
  res.send({ test: "test" });
});

app.get('/api/users/:_id/logs', (req, res) => {
  console.log("return description, duration, date of all workouts");
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
