import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get(':token')
    verifyToken(@Param('token') token: string): Boolean {
        return this.appService.verifyToken(token);
    }
}
