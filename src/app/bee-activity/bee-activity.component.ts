import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.scss']
})
export class BeeActivityComponent implements OnInit {

  @Input() posts: Array<any>;
  @Input() albums: Array<any>;
  @Input() todos: Array<any>;
  @Input() currentUserAlbum: any;
  @Input() currentBeeTitle: string;
  @Input() activePosts: boolean;
  @Input() activeTodos: boolean;
  @Input() activeAlbum: boolean;
  @Input() currentMobileTitle: string;
  @Input() allPosts: number;

  constructor() { }

  ngOnInit() {
  }

}
