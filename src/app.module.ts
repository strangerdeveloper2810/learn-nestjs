import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { PostsService } from "./posts/posts.service";
@Module({
  imports: [AppModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {}
