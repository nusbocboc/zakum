const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var request = require('request');

const app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ info: 'Hello There!' })
})



var options = {
  'method': 'GET',
  'url': 'https://razerhackathon.sandbox.mambu.com/api/settings/iddocumenttemplates',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
    'Cookie': 'AWSALB=daWzMp6Osp4FT43zWhRuTLiDhrUvxnqlCxpSk5QF8tx+gbAl1g+Ha/avbkkQ4De2i0mpBmSgsjnvPf5ju9zhxLmZXblHj06+cCMJ/NixPipl5Gi4bckLrYPc6Qy9; AWSALBCORS=daWzMp6Osp4FT43zWhRuTLiDhrUvxnqlCxpSk5QF8tx+gbAl1g+Ha/avbkkQ4De2i0mpBmSgsjnvPf5ju9zhxLmZXblHj06+cCMJ/NixPipl5Gi4bckLrYPc6Qy9'
  }
};

// app.get('/test', (req, res) => {
//   request(options, function (error, response) { 
//     if (error) throw new Error(error);
//     console.log(response.body);
//     res.json(response.body);
//   });
// })

app.route('/test').get((req, res) => {
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(response.body);
  });
})

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
