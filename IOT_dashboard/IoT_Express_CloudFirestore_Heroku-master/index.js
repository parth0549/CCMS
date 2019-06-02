const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    '<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp8266</b></p></li><li><p><b>GET /data/esp32</b></p></li><li><p><b>GET /data/mkr1000</b></p></li><li><p><b>POST /data/esp8266</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/esp32</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/mkr1000</b>  => {suhu, lembab, analog}</p></li></ul>')
})

app.get('/data/esp8266', (req, res) => {
  const db = fire.firestore();
    
    var wholeData = []
	db.collection('ccms').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/data/esp8266', (req, res)=>{
  const db = fire.firestore();
	
    db.collection('ccms').doc('003').update({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date()
    });
    res.send({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date(),
      status: 'POST data sukses!'
  })
})


app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})