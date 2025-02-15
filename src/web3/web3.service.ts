import { Injectable, Logger } from '@nestjs/common';
import {
  Account,
  Address,
  BlockTag,
  Client,
  createClient,
  GetBlockReturnType,
  GetFilterLogsReturnType,
  http,
  Log,
  publicActions,
  PublicActions,
  PublicRpcSchema,
  Transport,
  WalletActions,
  walletActions,
  WalletRpcSchema,
  WatchContractEventOnLogsParameter,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { BotChain, CustomConfigService } from '../config/config.service.js';
import { abi as orderHubAbi } from './abi/OrderHub.abi.js';
import { abi as orderSpokeAbi } from './abi/OrderSpoke.abi.js';

// type OrderCreatedEvent = ExtractEventArgs<typeof orderHubAbi, 'OrderCreated'>;

export type OrderWithdrawnEvent = Log<
  bigint,
  number,
  false,
  Extract<
    (typeof orderHubAbi)[number],
    { type: 'event'; name: 'OrderWithdrawn' }
  >,
  false,
  typeof orderHubAbi
>;

export type OrderSettledEvent = Log<
  bigint,
  number,
  false,
  Extract<
    (typeof orderHubAbi)[number],
    { type: 'event'; name: 'OrderSettled' }
  >,
  false,
  typeof orderHubAbi
>;

export type OrderCreatedEvent = Log<
  bigint,
  number,
  false,
  Extract<
    (typeof orderHubAbi)[number],
    { type: 'event'; name: 'OrderCreated' }
  >,
  false,
  typeof orderHubAbi
>;

export type OrderFilledEvent = Log<
  bigint,
  number,
  false,
  Extract<
    (typeof orderSpokeAbi)[number],
    { type: 'event'; name: 'OrderFilled' }
  >,
  false,
  typeof orderSpokeAbi
>;

export type OrderHubLog = WatchContractEventOnLogsParameter<
  typeof orderHubAbi
>[number];

export type OrderSpokeLog = WatchContractEventOnLogsParameter<
  typeof orderSpokeAbi
>[number];

@Injectable()
export class Web3Service {
  private logger = new Logger(Web3Service.name);
  private clients: Map<
    string,
    Client<
      Transport,
      undefined,
      Account,
      [...PublicRpcSchema, ...WalletRpcSchema],
      PublicActions<Transport, undefined, Account> &
        WalletActions<undefined, Account>
    >
  >;
  private chainMap: Map<string, BotChain>;

  constructor(private configService: CustomConfigService) {
    this.clients = new Map();
    this.chainMap = new Map();

    for (const chain of this.configService.botConfig.chain) {
      this.chainMap.set(chain.name, chain);
      const client = createClient({
        transport: http(chain.rpc_url),
        key: 'client',
        name: 'Client',
        account: privateKeyToAccount(chain.private_key),
      });

      const clientWPublic = client.extend(publicActions).extend(walletActions);

      this.clients.set(chain.name, clientWPublic);
    }
  }

  async getBlockNumber(chainName: string): Promise<bigint> {
    return await this.clients.get(chainName)!.getBlockNumber();
  }

  async getBlockBatch(
    chainName: string,
    blockNumbers: bigint[],
  ): Promise<GetBlockReturnType<undefined, false, BlockTag>[]> {
    return Promise.all(
      blockNumbers.map(async (blockNumber) => {
        return this.clients.get(chainName)!.getBlock({ blockNumber });
      }),
    );
  }

  async getBlockBatchOrderHubLogs({
    chainName,
    fromBlock,
    toBlock,
  }: {
    chainName: string;
    fromBlock: bigint;
    toBlock: bigint;
  }): Promise<
    GetFilterLogsReturnType<typeof orderHubAbi | typeof orderSpokeAbi>
  > {
    const client = this.clients.get(chainName)!;
    const filter = await client.createContractEventFilter({
      abi: [...orderHubAbi, ...orderSpokeAbi],
      address: [
        this.chainMap.get(chainName)!.order_hub_contract_address,
        this.chainMap.get(chainName)!.order_spoke_contract_address,
      ],
      fromBlock,
      toBlock,
    });
    const result = await client.getFilterLogs({ filter });
    return result;
  }

  async watcOrderHubLogs({
    chainName,
    fromBlock,
    onLog,
  }: {
    chainName: string;
    fromBlock: bigint;
    onLog: (log: OrderHubLog) => Promise<void>;
  }): Promise<void> {
    const client = this.clients.get(chainName)!;
    client.watchContractEvent({
      address: this.chainMap.get(chainName)!.order_hub_contract_address,
      abi: orderHubAbi,
      fromBlock: fromBlock,
      onLogs: (logs) => {
        logs.forEach((log) => {
          onLog(log).catch((error) => console.error(error));
        });
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }

  async getAddress({ chainName }: { chainName: string }): Promise<Address> {
    const client = this.clients.get(chainName)!;
    const addresses = await client.getAddresses();
    return addresses[0];
  }

  async watcOrderSpokeLogs({
    chainName,
    fromBlock,
    onLog,
  }: {
    chainName: string;
    fromBlock: bigint;
    onLog: (log: OrderSpokeLog) => Promise<void>;
  }): Promise<void> {
    const client = this.clients.get(chainName)!;
    client.watchContractEvent({
      address: this.chainMap.get(chainName)!.order_spoke_contract_address,
      abi: orderSpokeAbi,
      fromBlock: fromBlock,
      onLogs: (logs) => {
        logs.forEach((log) => {
          onLog(log).catch((error) => console.error(error));
        });
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }
}
