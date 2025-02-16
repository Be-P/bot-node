import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { config } from '../../config.js';

type Token = {
  name: string;
  symbol: string;
  type: string;
  address: `0x${string}`;
  decimals: number;
  price_feed: string;
  display_decimals: number;
  image: string;
};

export type BotChain = {
  name: string;
  private_key: `0x${string}`;
  chain_id: number;
  rpc_url: string;
  ws_url: string;
  start_block: number;
  block_batch_size: number;
  max_tx_retry: number;
  min_order_val: number;
  max_order_val: number;
  profitability_threshold: number;
  order_hub_contract_address: `0x${string}`;
  order_spoke_contract_address: `0x${string}`;
  filler_poll_interval: number;
  tokens: Token[];
};

type BotConfig = {
  chain: BotChain[];
};

@Injectable()
export class CustomConfigService extends NestConfigService {
  // TODO FIXME Schema validation for config
  public get botConfig(): BotConfig {
    return {
      ...(config as BotConfig),
    };
  }

  public getChainConfig(chain_id: bigint): BotChain {
    const botConfig = this.botConfig;
    const chainConfig = botConfig.chain.find(
      (chain) => chain.chain_id === Number(chain_id),
    );
    if (!chainConfig) {
      throw new Error(`Chain with id ${chain_id} not found`);
    }
    return chainConfig;
  }
}
