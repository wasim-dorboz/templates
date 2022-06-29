require('dotenv/config');

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URL,{
UseNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true
}
)

.then(()=>console.log('connected to db'))
.catch((err)=>console.log("connection failed"));

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})



