import {
    Body,
    Controller,
    Get,
    Inject,
    OnModuleDestroy,
    OnModuleInit,
    Param,
    ParseUUIDPipe,
    Post,
    ValidationPipe,
  } from '@nestjs/common';
  import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
  import { Producer } from '@nestjs/microservices/external/kafka.interface';
  import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from 'src/dto/transaction.dto';
  import { BankAccount } from 'src/models/bank-account.model';
  import { PixKey } from 'src/models/pix-key.model';
  import {
    Transaction,
    TransactionOperation,
    TransactionStatus,
  } from 'src/models/transaction.model';
  import { Repository } from 'typeorm';
  
  @Controller('bank-accounts/:bankAccountId/transactions')
  export class TransactionController{
    
    constructor(
      @InjectRepository(BankAccount)
      private bankAccountRepo: Repository<BankAccount>,
      @InjectRepository(Transaction)
      private transactionRepo: Repository<Transaction>,
    
    ) {}
  
      
    @Get()
    index(
      @Param(
        'bankAccountId',
        new ParseUUIDPipe({ version: '4', errorHttpStatusCode: 422 }),
      )
      bankAccountId: string,
    ) {
      return this.transactionRepo.find({
        where: {
          bank_account_id: bankAccountId,
        },
        order: {
          created_at: 'DESC',
        },
      });
    }
  
    @Post()
    async store(
      @Param(
        'bankAccountId',
        new ParseUUIDPipe({ version: '4', errorHttpStatusCode: 422 }),
      )
      bankAccountId: string,
      @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
      body: TransactionDto,
    ) {
      await this.bankAccountRepo.findOneOrFail(bankAccountId);
  
      // let transaction = this.transactionRepo.create({
      //   ...body,
      //   amount: body.amount * -1,
      //   bank_account_id: bankAccountId,
      //   operation: TransactionOperation.debit,
      // });
      // transaction = await this.transactionRepo.save(transaction);
  
      // const sendData = {
      //   id: transaction.external_id,
      //   accountId: bankAccountId,
      //   amount: body.amount,
      //   pixkeyto: body.pix_key_key,
      //   pixKeyKindTo: body.pix_key_kind,
      //   description: body.description,
      // }; 
      // return transaction;
    }
  
    
  }