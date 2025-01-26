import { Test, TestingModule } from '@nestjs/testing';
import { ViemService } from './viem.service.js';
import { CustomConfigModule } from '../config/config.module.js';

describe('ViemService', () => {
  let service: ViemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CustomConfigModule],
      providers: [ViemService],
    }).compile();

    service = module.get<ViemService>(ViemService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    const result = await service.getBlockNumber('Foundry');
    const res = await service.getBlockBatch('Foundry', [27n]);
    res.forEach((r) => {
      console.log(r);
    });
    expect(result).toBe(27n);
  });
});
