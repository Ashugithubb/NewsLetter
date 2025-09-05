import { Module } from '@nestjs/common';
import { NewsLettersService } from './news-letters.service';
import { NewsLettersController } from './news-letters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsLetter } from './entities/news-letter.entity';
import { NewsLetterRepository } from './repository/news-letter-repo';
import { UserModule } from 'src/user/user.module';
import { MailModule } from 'src/mail/mail.module';
import { SubscribersModule } from 'src/subscribers/subscribers.module';


@Module({
  imports:[TypeOrmModule.forFeature([NewsLetter]),UserModule,MailModule,SubscribersModule],
  controllers: [NewsLettersController],
  providers: [NewsLettersService,NewsLetterRepository],
  exports:[NewsLettersService,NewsLetterRepository]
})
export class NewsLettersModule {}
