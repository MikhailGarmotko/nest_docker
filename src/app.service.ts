import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! I am running in the port ${process.env.PORT}`;
  }
}
