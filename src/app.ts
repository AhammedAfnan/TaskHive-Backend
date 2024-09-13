import express from 'express'
import mongoose from 'mongoose'
import databaseConfig from './config/database';
import serverConfig from './config/server';

const app = express();

app.use(express.json())

mongoose.connect(databaseConfig.MONGO_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch(err => console.log('Error connecting to MongoDB:',err))


app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`);
})