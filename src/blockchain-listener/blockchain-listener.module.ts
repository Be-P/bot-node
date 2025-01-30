import { Module } from '@nestjs/common';
import { ViemModule } from '../viem/viem.module.js';
import { BlockchainListenerService } from './blockchain-listener.service.js';

export const BOTCHAIN_TOKEN = 'BotChain';

@Module({
  imports: [ViemModule],
  providers: [BlockchainListenerService],
})
export class BlockchainListenerModule {}
