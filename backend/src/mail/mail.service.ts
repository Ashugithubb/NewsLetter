import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }
  async sendNewsLetterMail(dto: CreateMailDto): Promise<void> {
    try {
      console.log("mail dto:",dto);
      await this.mailerService.sendMail({
        to: dto.email,
        from: process.env.MAIL_USER,
        subject: 'New News Letter from Zenmonk',
        template: './email',
        context: {
          name: dto.name,
          content: dto.content,
          year: new Date().getFullYear(),
        },
      });
    } catch (error) {
      console.error('Failed to send NewsLetter email:', error);
    }
  }


}
