import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeesComponent } from './bees/bees.component';
import { BeeComponent } from './bee/bee.component';

import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { BeeActivityComponent } from './bee-activity/bee-activity.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { TodosComponent } from './todos/todos.component';
import { PhotoComponent } from './photo/photo.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BeesComponent,
    BeeComponent,
    PostsComponent,
    PostComponent,
    BeeActivityComponent,
    CommentComponent,
    AlbumsComponent,
    AlbumComponent,
    TodosComponent,
    PhotoComponent,
    TodoComponent,
    HeaderComponent,
    NewPostComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
