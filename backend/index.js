
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  // console.log(global.foodData);
  global.foodCategory = CatData;
  // console.log(global.foodCategory);
})

const express = require('express')
const app = express()
const PORT = process.env.PORT ||5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));


app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`)
})

