import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tasks_db',
      synchronize: false,
      retryAttempts: 3,
      retryDelay: 1000,
    }),
    TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
