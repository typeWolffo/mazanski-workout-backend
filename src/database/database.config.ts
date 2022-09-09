import { ConfigType, registerAs } from '@nestjs/config';
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';

export const databaseConfig = registerAs('database', () => ({
  databaseUrl: process.env.DATABASE_URL ?? '',
}));

export type DatabaseConfigType = ConfigType<typeof databaseConfig>;

export const makeDatabaseConfig = (
  config: DatabaseConfigType,
): DataSourceOptions => {
  const { databaseUrl } = config;

  return {
    type: 'postgres',
    url: databaseUrl,
    entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
    // migrations: [path?.join(__dirname, 'migrations', '*.{js,ts}')],
    ssl: { rejectUnauthorized: false },
    synchronize: true,
  };
};
