import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ExerciseSetsModule } from './exercise-sets/exercise-sets.module';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    ExercisesModule,
    ExerciseSetsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule {}
