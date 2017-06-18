import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.scss']
})
export class BeeComponent implements OnInit {

  public active = false;

  @Input() bee: any;
  @Output() currentBeePosts: EventEmitter<any> = new EventEmitter();
  @Output() currentBeeAlbum: EventEmitter<any> = new EventEmitter();
  @Output() currentBeeTodos: EventEmitter<any> = new EventEmitter();
  @Output() currentBee: EventEmitter<any> = new EventEmitter();
  @Output() currentMobileTitle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendPosts() {
    this.currentBeePosts.emit(this.bee.getPosts());
    this.currentMobileTitle.emit(this.bee.getUserName() + `'s Posts`);
  }

  posts() {
    this.sendPosts();
  }

  sendAlbums() {
    this.currentBeeAlbum.emit(this.bee.getAlbum());
    this.currentMobileTitle.emit(this.bee.getUserName() + `'s Albums`);
  }

  albums() {
    this.sendAlbums();
  }

  sendTodos() {
    this.currentBeeTodos.emit(this.bee.getTodos());
    this.currentMobileTitle.emit(this.bee.getUserName() + `'s Todos`);
  }

  todos() {
    this.sendTodos();
  }

  sendBee() {
    this.currentBee.emit(this.bee);
    this.active = true;
  }

}
