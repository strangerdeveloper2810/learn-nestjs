<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## NestJS Basic Knowledge

- [app.controller.ts] - Chứa các router để xử lý các request và trả về response cho client.

- [app.controller.spec.ts] - Có nhiệm vụ viết unit-test cho các controller.

- [app.module.ts] - Root module của ứng dụng.

- [app.service.ts] - Service chứa các logic mà controller sẽ dùng đến.

- [main.ts] - Sử dụng NestFactory để khởi tạo ứng dụng.

Về cơ bản thì main.ts sẽ sử dụng static method create() của NestFactory để tạo server app như sau:

```sh
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
```

## Module trong NestJS

Module có nhiệm vụ đóng gói những logic liên quan của các chức năng cần triển khai đến client một cách độc lập. Một module trong Nest là class được define với @Module (). @Module () sẽ cung cấp metadata mà Nest sử dụng để tổ chức cấu trúc ứng dụng. Một file module cơ bản sẽ như sau:

```sh
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

Trong một module sẽ bao gồm các thành phần chính sau đây:

- [providers] - Có nhiệm vụ khởi tạo và cung cấp các service mà sẽ được controller trong module sẽ sử dụng đến.

- [controllers] - Có nhiệm vụ khởi tạo những controller đã được xác định trong module.

- [imports] - Có nhiệm vụ import những thành phần của một module khác mà module sẽ sử dụng.

- [exports] - Có nhiệm vụ export các thành phần của provider và các module khác sẻ import để sử dụng.

Nest cũng hỗ trợ tạo ra các module, controller, provider bằng CLI. Để tạo ra một module users, chúng ta sử dụng lệnh sau:

```sh
nest g module users
```

note for me:

[1] - Tạo module. Vd: nest g module users, nest g module cart

[2] - Tạo service cho module đó. role: moduleName.service.ts Vd: cart.service.ts

[3] - Viết service cho module đó.

[4] - Tạo controller cho module đó. role: moduleName.controller.ts Vd: cart.controller.ts

[5] - Viết action controller cho module đó

[6] - Import các service và controller đã viết cho module đó vào module đã tạo

Ngoài ra, Nest còn một tính năng khác đó là Share Module. Bạn có thể chia sẻ bất kì provider nào trong module hiện tại cho các module khác. Ví dụ bạn có thể chia sẻ UserService cho các module khác sử dụng bằng cách thêm nó vào mảng exports trong users.module.ts như sau:

```sh
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
```

[7] - Import module đã tạo vào trong app.module.ts

Còn một tính năng khác trong Nest đó là global module. Nếu bạn không muốn phải import một module nào đó quá nhiều lần thì Nest cung cấp @Global() cho phép bạn sử một module từ module khác mà không cần import. Như vậy chúng ta có thể sử dụng service của các module khác rất dễ dàng phải không. Chỉ cần thêm @Global() như dưới đây là có thể biến nó trở thành global module.

```sh
import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
```

## Controller trong NestJS

ontroller là nơi xử lý các request và trả về response cho người dùng. Mỗi controller sẽ chứa các router thực hiện hành động và nhiệm vụ khác nhau được yêu cầu từ client. Để tạo ra một controller chúng ta sử dụng một và @Controller(). @Controller() sẽ có nhiệm vụ liên kết class Controller đó với request tương ứng. Chúng ta sẽ tạo một controller cơ bản như sau, bạn cũng có thể tạo controller bằng cmd:

```sh
nest g controller users
```

Như vậy chúng ta đã tạo ra một API với url GET: /users. Trong @Controller mình có sử dụng tiền tố users làm route path, việc sử dụng như vậy sẽ tập hợp các route liên quan và giảm thiểu code lặp lại. Để xác định method cụ thể cho một request chúng ta sẽ define @Get() trên function findAll(). Việc khai báo như vậy sẽ giúp Nest có thể ánh xạ request Get: /users đến function findAll() này để xử lý và response lại cho client. Ngoài Get() thì Nest cũng cung cấp đầy đủ các method như framework khác như @Post(), @Delete(), @Put(), @Path(), @All(),... Ngoài ta ta cũng có thể truyền path vào @Get chẳng hạn như @Get('all') sẽ tạo ra một api GET /users/all. Chúng ta cũng có thể config http status code và header như sau:

```sh
@Post()
@HttpCode(204)
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}

```
## Providers trong NestJS
Provider là nơi cung cấp các serivce, repositories, factories, helpers,... cho controller trong một module sử dụng. Đây cũng là nơi sẽ chứa những logic xử lý đã được tách biệt với controller. Để tạo ra một provider chúng ta chỉ cần khai báo @Injectable () trước một class đã định nghĩa. Việc sử dụng @Injectable() sẽ cho Nest biết đây là một class thuộc provider. Để tạo ra một service nơi mà chứa các logic xử lý của UserController, chúng ta hãy tạo ra một UserService trong file user.service.ts dưới đây hoặc sử dụng cmd:

```sh
nest g service cats
```


## CRUD API WITH NESTJS
```sh
https://viblo.asia/p/tim-hieu-nestjs-framework-crud-RnB5pOYJlPG
```