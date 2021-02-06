import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFirstController } from './controllers/my-first/my-first.controller';

@Module({
  imports: [],
  controllers: [AppController, MyFirstController],
  providers: [AppService],
})
export class AppModule {}
