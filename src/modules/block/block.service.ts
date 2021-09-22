import { Injectable } from '@nestjs/common';
import SHA256 from 'crypto-js/sha256';

interface Block {
  index: number;
  previousHash: string;
  timestamp: Date;
  data: any;
  hash: string;
}

@Injectable()
export class BlockService {
  calculateHash({ index, previousHash, timestamp, hash, data }: Block) {
    return SHA256(
      index + previousHash + timestamp + JSON.stringify(data),
    ).toString();
  }
}
