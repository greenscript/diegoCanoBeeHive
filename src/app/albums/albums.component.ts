import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() albums: Array<any>;
  @Input() currentUserAlbum: any;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
