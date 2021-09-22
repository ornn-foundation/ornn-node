import { Injectable, OnModuleInit } from '@nestjs/common';
import sha256 from 'crypto-js/sha256';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
