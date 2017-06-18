import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  @Input() bees: Array<any>;
  @Output() sendPosts: EventEmitter<any> = new EventEmitter();
  @Output() sendBeePosts: EventEmitter<any> = new EventEmitter();
  @Output() sendAlbums: EventEmitter<any> = new EventEmitter();
  @Output() sendTodos: EventEmitter<any> = new EventEmitter();
  @Output() sendBee: EventEmitter<any> = new EventEmitter();
  @Output() sendMobileTitle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  receiveBeePosts(pPosts) {
    this.sendPosts.emit(pPosts);
  }

  receiveCurrentBeePosts(pBee) {
    this.sendBeePosts.emit(pBee);
  }

  receiveCurrentAlbum(pAlbum) {
    this.sendAlbums.emit(pAlbum);
  }

  receiveCurrentTodos(pTodos) {
    this.sendTodos.emit(pTodos);
  }

  receiveCurrentBee(pBee) {
    this.sendBee.emit(pBee);
  }

  receiveCurrentMobileTitle(pTitle) {
    this.sendMobileTitle.emit(pTitle);
  }

}
