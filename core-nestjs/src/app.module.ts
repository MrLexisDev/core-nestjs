import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ExampleController} from './example/example.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Connection} from 'typeorm';
import {Example} from './entity/example';

const entities = [
    Example,
]

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([...entities]),
    ],
    controllers: [AppController, ExampleController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }

}