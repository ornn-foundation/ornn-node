import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './modules/blockchain/blockchain.module';
import { BlockModule } from './modules/block/block.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [BlockchainModule, BlockModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
