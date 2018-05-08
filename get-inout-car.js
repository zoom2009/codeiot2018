const distance = require('gps-distance')
const mongoose = require('mongoose')
const express = require('express')

var app = express()
app.use(bodyParser.json())

var Schema = mongoose.Schema

var GET_IN_OUT_CARSchema = new Schema({
  RFID: {
    required: true,
    type: String
  },
  carID: {
    required: true,
    type: String,
    minlength: 6,
    maxlength: 6
  },
  in_out: {
    required: true,
    type: String,
    enum: ['i', 'o']
  },
  stationID: {
    type: String
  },
  dateTime: {
    required: true,
    type: String
  }
})
GET_IN_OUT_CARSchema.index({RFID: 1, dateTime: 1}, {unique: true})
var GET_IN_OUT_CAR = mongoose.model('GET_IN_OUT_CAR', GET_IN_OUT_CARSchema)

var stationsFN = (lat, lng, fn) => {
  STATION.find().then((sta) => {
    for(let i=0;i<sta.length;i++){
      if((distance(lat, lng, sta[i].lat, sta[i].lng)*1000) <= 15){
        fn(sta[i].stationID)
        return
      }
    }
    fn(undefined, 'Not Found this lat, lng ('+lat+', '+lng+') match in staion database')
  }, (e) => {
     console.log('!!! Error to STATION.find() !!!', e)
  })
}

app.post('/GET_IN_OUT_CAR', (req, res) => {
  stationsFN(parseFloat(req.body.lat), parseFloat(req.body.lng), (station, err) => {
    if(station){
      let newGET_IN_OUT_CAR = new GET_IN_OUT_CAR({
        RFID: req.body.RFID,
        carID: req.body.carID,
        in_out: req.body.in_out,
        stationID: station,
        dateTime: req.body.dateTime
      })
      newGET_IN_OUT_CAR.save().then((doc) => {
        res.send('is saved to db '+doc)
      }, (e) => {
        res.status(400).send('can not save to db '+e)
      })
    }else{
      res.status(400).send(err)
    }
  })
})
