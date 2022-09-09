import { ConfigType, registerAs } from '@nestjs/config';
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';
import { ExcerciseSetEntity } from './../excercise-sets/excercise-set.entity';
import { ExcerciseEntity } from './../excercises/excercise.entity';
import { User } from './../users/user.entity';

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

    // entities: [User, ExcerciseSetEntity, ExcerciseEntity],
    ssl: { rejectUnauthorized: false },
    synchronize: false,
  };
};
