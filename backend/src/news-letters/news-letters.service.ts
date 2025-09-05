import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';
import { UserRepository } from 'src/user/repository/user-repo';
import { NewsLetterRepository } from './repository/news-letter-repo';
import { Status } from './enum/news-letter.enum';
import { MailService } from 'src/mail/mail.service';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { SubscriberRepository } from 'src/subscribers/repository/subscriber-repo';


@Injectable()
export class NewsLettersService {
  constructor(private readonly userRepo: UserRepository,
    private readonly newsLetterRepo: NewsLetterRepository,
    private readonly mailService: MailService,
    private readonly subscriberRepo: SubscriberRepository
  ) { }

  async create(createNewsLetterDto: CreateNewsLetterDto, role: string, id: number) {
    if (role != "Admin") throw new UnauthorizedException()

    const admin = await this.userRepo.findOneBy({ id });
    if (!admin) throw new UnauthorizedException('Admin user not found');

    const newNewsLetter = this.newsLetterRepo.create({
      ...createNewsLetterDto,
      admin
    });
    await this.newsLetterRepo.save(newNewsLetter);

    const status = createNewsLetterDto.status;

    if (status === Status.PUBLISHED) {
      const { emailContent } = createNewsLetterDto;
      const users = await this.subscriberRepo.find({
        where: {
          subscribed: true
        },
        relations: ['user']
      })


      users.map((u) => {
        const name = u.user.name;
        const email = u.email
        const content = emailContent;
        this.mailService.sendNewsLetterMail({ email, name, content });
      })
    }
  }

  async publishNewsLetter() {

  }



  findAll() {
    return `This action returns all newsLetters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsLetter`;
  }

  update(id: number, updateNewsLetterDto: UpdateNewsLetterDto) {
    return `This action updates a #${id} newsLetter`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsLetter`;
  }
}
