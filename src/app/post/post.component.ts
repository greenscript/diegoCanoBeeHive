import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Input() name: string;
  @Input() body: string;
  @Input() email: string;
  @Input() index: number;

  public hideShowText: string = 'Show';
  public allComments: number = 500;
  public hide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    this.allComments = this.allComments + 1;
    this.post.comments.push(
      new Comment(
        this.allComments,
        this.post.getId(),
        this.name || '',
        this.body || '',
        this.email || ''
      )
    );
    console.log(this.post.comments);
  }

  hideShow() {
    if (!this.hide) {
      this.hide = true;
      this.hideShowText = 'Show';
    } else {
      this.hide = false;
      this.hideShowText = 'Hide';
    }

  }

}
