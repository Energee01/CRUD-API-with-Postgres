require('dotenv').config();
const express = require ('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes')

const app = express();
app.use(express.json());


app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server is now running at port ${PORT}`));