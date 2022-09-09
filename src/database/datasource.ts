import { DataSource } from 'typeorm';

import { databaseConfig, makeDatabaseConfig } from './database.config';

const config = makeDatabaseConfig(databaseConfig());

export default new DataSource(config);
