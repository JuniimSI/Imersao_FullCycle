import { Body, Controller, Get, Inject, Param, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PixKeyDto } from 'src/dto/pix-key.dto';
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
    async store(
      @Param('bankAccountId', new ParseUUIDPipe({ version: '4' }))
      bankAccountId: string,
      @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
      body: PixKeyDto,
    ) {
       await this.bankAccountRepo.findOneOrFail(bankAccountId);
    }

    @Get('exists')
    exists(){

    }

}
