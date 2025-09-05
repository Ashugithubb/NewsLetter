import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

import { Subscriber } from './entities/subscriber.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/repository/user-repo';

@Injectable()
export class SubscribersService {
  constructor(@InjectRepository(Subscriber) private readonly subscriberRepo: Repository<Subscriber>,
    private readonly userRepo: UserRepository
  ) { }

  async create(createSubscriberDto: CreateSubscriberDto, id: number) {
    const email = createSubscriberDto.email;

    const existing = await this.subscriberRepo.findOneBy({ email });
    if (existing) throw new ConflictException("This email is already Subscribed");

    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException()

    const newSubscriber = this.subscriberRepo.create({
      email,
      subscribed: true,
      user
    })
    return await this.subscriberRepo.save(newSubscriber);
  }


  async unSubscribe(id: number) {
    const subscriber = await this.subscriberRepo.findOne(
      {
        where: {
          user: { id }
        }
      }

    );

    if (!subscriber) throw new UnauthorizedException()

    subscriber!.subscribed = false;

    return await this.subscriberRepo.save(subscriber);
  }



  findAll() {
    return `This action returns all subscribers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    return `This action updates a #${id} subscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
