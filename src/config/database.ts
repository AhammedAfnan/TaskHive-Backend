import dotenv from 'dotenv'

dotenv.config()

const databaseConfig = {
    MONGO_URI:process.env.MONGO_URI!
}

export default databaseConfig;