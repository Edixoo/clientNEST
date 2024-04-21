import { Injectable } from '@nestjs/common';
import * as process from "node:process";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AppService {

  verifyToken(token: string): Boolean {

    const decoded = jwt.verify(token, process.env.SECRET, { algorithms: ['HS256'] });

    return decoded;
  }
}
