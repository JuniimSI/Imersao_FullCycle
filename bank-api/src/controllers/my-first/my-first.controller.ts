import { Controller, Get } from '@nestjs/common';

@Controller('my-first')
export class MyFirstController {

    @Get('hello-world')
    index(){
        return {'key': 'valu2e'}
    }
}
