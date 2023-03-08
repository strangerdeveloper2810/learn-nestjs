import { Injectable, HttpException } from "@nestjs/common";
import { PostList } from "./../constants/PostList";
import { Post } from "src/interface/Post";
@Injectable()
export class PostsService {
  posts: Post[] = PostList;

  getPost(): Promise<Post[]> {
    return new Promise(resolve => {
      resolve(this.posts);
    });
  }

  getPostId(postId: number): Promise<Post> {
    let id = Number(postId);
    return new Promise(resolve => {
      const post = this.posts.find(post => post.id === id);
      if (!post) {
        throw new HttpException("Post not found", 404);
      }
      resolve(post);
    });
  }

  addPost(post): Promise<Post[]> {
    return new Promise(resolve => {
      this.posts.push(post);
      resolve(this.posts);
    });
  }

  deletePost(postId: number): Promise<Post[]> {
    let id = Number(postId);
    return new Promise(resolve => {
      const index = this.posts.findIndex(post => post.id === id);
      if (index === -1) {
        throw new HttpException("Post not found", 404);
      }
      this.posts.splice(index, 1);
      resolve(this.posts);
    });
  }
}
