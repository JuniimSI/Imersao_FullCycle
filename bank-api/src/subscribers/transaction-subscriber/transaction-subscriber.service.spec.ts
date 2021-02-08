import { Test, TestingModule } from '@nestjs/testing';
import { TransactionSubscriberService } from './transaction-subscriber.service';

describe('TransactionSubscriberService', () => {
  let service: TransactionSubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionSubscriberService],
    }).compile();

    service = module.get<TransactionSubscriberService>(TransactionSubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
