import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ExcerciseSetsModule } from './excercise-sets/excercise-sets.module';
import { ExcercisesModule } from './excercises/excercises.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    ExcercisesModule,
    ExcerciseSetsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule {}
