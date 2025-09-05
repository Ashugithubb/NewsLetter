import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';
import { UserRepository } from 'src/user/repository/user-repo';
import { NewsLetterRepository } from './repository/news-letter-repo';
import { Status } from './enum/news-letter.enum';


@Injectable()
export class NewsLettersService {
  constructor(private readonly userRepo:UserRepository,
          private readonly newsLetterRepo:NewsLetterRepository
  ){}
  
  async create(createNewsLetterDto: CreateNewsLetterDto,role:string,id:number) {
    if(role!="Admin") throw new UnauthorizedException()

    const admin = await this.userRepo.findOneBy({id});
    if (!admin) throw new UnauthorizedException('Admin user not found');

    const newNewsLetter = this.newsLetterRepo.create({
      ...createNewsLetterDto,
      admin
    });
   await this.newsLetterRepo.save(newNewsLetter);

   const status = createNewsLetterDto.status;

   if(status===Status.PUBLISHED){

   }
  }

async publishNewsLetter(){
  
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
