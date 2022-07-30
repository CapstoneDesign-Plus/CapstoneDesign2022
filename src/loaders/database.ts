
import { connect } from 'mongoose';
import ENV from '@/config';

export default async () => {
  const connection = await connect(ENV.DB_URL)
  return connection
}