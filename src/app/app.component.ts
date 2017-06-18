import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Bee } from './models/bee';
import { Post } from './models/post';
import { Company } from './models/company';
import { Address } from './models/address';
import { Geo } from './models/geo';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Todo } from './models/todo';
import { Comment } from './models/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private bees: Bee[] = [];
  public posts: Post[] = [];
  public albums: Album[] = [];
  public currentUserAlbum: any;
  public todos: Todo[] = [];
  public currentBee: any;
  public currentBeeTitle: string = 'Bee';
  public activePosts: boolean = true;
  public activeAlbum: boolean = false;
  public activeTodos: boolean = false;
  public currentMobileTitle: string = `Bee's Posts`;
  public allPosts: number;
  public allComments: number;


  constructor(private http: Http) {
    this.loadFromJson();
  }

  loadData(usersUrl: string, postsUrl: string, albumsUrl: string, photosUrl: string, todosUrl: string, commentsUrl: string) {
    let props = this;
    this.http.get(usersUrl).map(res => res.json()).subscribe((data) => {

      for (var user of data) {
        let company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        let address = new Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Geo
          (user.address.geo.lat, user.address.geo.lng));
        let bee = new Bee(user.id, user.name, user.username, user.email, user.phone, user.website, address
          , company, user.avatarUrl);
        this.bees.push(bee);
      }

      this.http.get(postsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let post = new Post(item.id, item.userId, item.title, item.body);
          for (var bee of this.bees) {
            if (post.getUserid() === bee.getId()) {
              bee.addPost(post);
              props.posts.push(post);
              props.allPosts = props.posts.length;
            }
          }
        }
      });

      this.http.get(albumsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let album = new Album(item.id, item.userId, item.title);
          for (var bee of this.bees) {
            if (album.getUserid() === bee.getId()) {
              bee.setAlbum(album);
              props.albums.push(album);
            }
          }
        }

        this.http.get(photosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl);
            for (var bee of this.bees) {
              if (photo.getAlbumId() === bee.getAlbum().getId()) {
                bee.addPhotoToAlbum(photo);
              }
            }
          }
        });

        this.http.get(todosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let todo = new Todo(item.id, item.userId, item.title, item.completed);
            for (var bee of this.bees) {
              if (todo.getUserid() === bee.getId()) {
                bee.addTodo(todo);
                props.todos.push(todo);
              }
            }
          }
        });

        this.http.get(commentsUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let comment = new Comment(item.id, item.postId, item.name, item.body, item.email);
            for (var bee of this.bees) {
              for (var post of bee.getPosts()) {
                if (post.getId() === comment.getPostId()) {
                  post.addComment(comment);
                }
              }
            }
          }
        });
      });

      //1. Agregar tu información a este usuario.
      let company = new Company('Pixel506', 'A better world for everyone', 'Dream does not cost a dine');
      let address = new Address('Rea Ave', 'Mountain View Valley', 'Cartago', '1000', new Geo
        ('0.000001', '0.000002'));
      let me = new Bee(11, 'Diego Cano', 'greenscript', 'diegocanocamacho23@gmail.com', '6068-1794', 'www.ddccdev.com', address
        , company, 'http://ddccdev.com/wp-content/uploads/2017/03/octolink.jpg');
      let album = new Album(1000, 11, 'Diegos Photos');
      me.setAlbum(album);
      this.bees.push(me);

      console.log(this.bees);
      console.log(this.posts);
    });

  }

  loadFromServer() {
    //Data from: https://jsonplaceholder.typicode.com/
    this.loadData('https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments');
  }

  loadFromJson() {
    this.loadData('../assets/data/users.json',
      '../assets/data/posts.json',
      '../assets/data/albums.json',
      '../assets/data/photos.json',
      '../assets/data/todos.json',
      '../assets/data/comments.json');
  }

  receivePosts(pPosts) {
    this.posts = pPosts;
    this.activePosts = true;
    this.activeTodos = false;
    this.activeAlbum = false;
  }

  receiveCurrentMobileTitle(pTitle) {
    this.currentMobileTitle = pTitle;
  }

  receiveAlbums(pAlbums) {
    if (pAlbums.lenght) {
      this.albums = pAlbums;
      this.currentUserAlbum = false;
    } else {
      this.currentUserAlbum = pAlbums;
      this.activePosts = false;
      this.activeTodos = false;
      this.activeAlbum = true;
    }
  }

  receiveTodos(pTodos) {
    this.todos = pTodos;
    this.activeTodos = true;
    this.activePosts = false;
    this.activeAlbum = false;
  }

  receiveBee(pBee) {
    this.currentBee = pBee;
    this.todos = pBee.getTodos();
    this.currentUserAlbum = pBee.getAlbum();
    this.posts = pBee.getPosts();
    this.currentBeeTitle = pBee.getUserName();
  }

}
