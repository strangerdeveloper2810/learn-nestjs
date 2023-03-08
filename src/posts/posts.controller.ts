import { Controller, Get, Param, Post, Body, Delete, Query } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "../dto/create-post.dto";
import { identity } from "rxjs";
@Controller("api/posts")
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  async getPosts() {
    const posts = await this.postService.getPost();
    return posts;
  }

  @Get(":id")
  async getPostID(@Param("id") id: number) {
    const post = await this.postService.getPostId(id);
    return post;
  }

  @Post()
  async addPost(@Body() CreatePostDto: CreatePostDto) {
    const post = await this.postService.addPost(CreatePostDto);
    return post;
  }

  @Delete(":id")
  async deletePost(@Param("id") id: number) {
    const post = await this.postService.deletePost(id);
    return post;
  }
}
