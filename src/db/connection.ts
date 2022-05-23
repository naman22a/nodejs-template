import { DataSource } from 'typeorm';
import { __prod__ } from '../global/constants';

const connection = new DataSource({
    type: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
    synchronize: !__prod__,
    logging: !__prod__
});

connection
    .initialize()
    .then(() => console.log('connected'))
    .catch(() => console.log('not connected'));
