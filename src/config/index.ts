import { config } from 'dotenv';

type NodeEnvironment = 'production' | 'test' | 'development'

interface Environment {
  NODE_ENV : NodeEnvironment,
  DB_URL : string,
  HOST: string,
  PORT: number
}

config();

const env : Environment = {
  NODE_ENV : (process.env.NODE_ENV || 'development') as NodeEnvironment,
  DB_URL : process.env.DB_URL || 'localhost',
  HOST: process.env.HOST || 'localhost',
  PORT: parseInt(process.env.PORT || '0')
}

export default env