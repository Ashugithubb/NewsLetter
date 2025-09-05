import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSubscriberDto: CreateSubscriberDto, @Req() req) {
    const id = req.user.id
    return this.subscribersService.create(createSubscriberDto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  unSubscribe(@Req() req) {
    const id = req.user.id;
    return this.subscribersService.unSubscribe(id)
  }


  @Get()
  findAll() {
    return this.subscribersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscribersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriberDto: UpdateSubscriberDto) {
    return this.subscribersService.update(+id, updateSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscribersService.remove(+id);
  }
}
