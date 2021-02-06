import { Controller, Get, Inject, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from 'src/models/bank-account.model';
import { PixKey } from 'src/models/pix-key.model';
import { Repository } from 'typeorm';

@Controller('bank-accounts/:bankAccountId/pix-keys')
export class PixKeyController {

    constructor(
        @InjectRepository(PixKey)
        private pixKeyRepo: Repository<PixKey>,
        @InjectRepository(BankAccount)
        private bankAccountRepo: Repository<BankAccount>,
       // @Inject('CODEPIX_PACKAGE')
       // private client: ClientGrpc,
      ) {}
      
    @Get()
    index(
        @Param('bankAccountId', new ParseUUIDPipe({ version: '4' }))
        bankAccountId: string,
    ){
        return this.pixKeyRepo.find({
            where: {
              bank_account_id: bankAccountId,
            },
            order: {
              created_at: 'DESC',
            },
          });
    }


    @Post()
    store(){

    }

    @Get('exists')
    exists(){

    }

}
