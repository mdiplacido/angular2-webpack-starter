import { IPost } from './../model/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrls: ['./posts-grid.component.css']
})
export class PostsGridComponent implements OnInit {
  @Input()
  posts: IPost[];

  constructor() { }

  ngOnInit() {
  }

}