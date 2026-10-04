require('dotenv').config();
const express = require ('express');
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(express.json());


app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server is now running at port ${PORT}`));