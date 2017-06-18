import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() posts: Post[];
  @Input() allPosts: number;

  constructor() { }

  addPost() {
    this.allPosts = this.allPosts + 1;
    this.posts.push(
      new Post(
        this.allPosts,
        11,
        this.title || '',
        this.content || ''
      )
    );
    console.log(this.posts);
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
   this.allPosts = this.posts.length;
  }
}
