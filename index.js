const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const router = require('./routes/routes')
const PORT = process.env.PORT || 3500;
const app = express();
app.use(express.json());
app.use(cors());

//test db connection
async () => {
    try{
    await db.authenticate();
    console.log('Database connected...')
}catch(err){
    console.log('Unable to connect to database'); 
}
}

app.use('/products', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

