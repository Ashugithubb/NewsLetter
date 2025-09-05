import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { NewsLettersService } from './news-letters.service';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';

@Controller('news-letters')
export class NewsLettersController {
  constructor(private readonly newsLettersService: NewsLettersService) { }
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createNewsLetterDto: CreateNewsLetterDto, @Req() req) {
    const role = req.user.role;
    const id = req.user.id;
    return this.newsLettersService.create(createNewsLetterDto,role,id);
  }

  @Get()
  findAll() {
    return this.newsLettersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsLettersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsLetterDto: UpdateNewsLetterDto) {
    return this.newsLettersService.update(+id, updateNewsLetterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsLettersService.remove(+id);
  }
}
