import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

import "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  lastError: any;
  allPosts: IPost[] = [];
  filteredPosts: IPost[] = [];
  loading = false;
  searchText: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchAllPosts() {
    console.log("got to fetchAllPosts");
    this.lastError = undefined;
    this.loading = true;
    this.allPosts = [];
    this.filteredPosts = [];
    this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((error) => {
        this.lastError = error;
        return Observable.throw(error);
      })
      .finally(() => {
        this.loading = false;
      })
      .subscribe(response => {
        let data = response.json();
        // alert('got here! total count is: ' + data.length);
        this.allPosts = data;
        this.filteredPosts = this.filterInMemory(data);
      });
  }

  public filterInMemory(posts: IPost[]) {
    let text = this.cleanSearchText;
    if (text.length === 0) {
      return posts;
    }

    return posts.filter(post => post.body.toLowerCase().indexOf(text) !== -1);
  }

  public searchTextChanged() {
    this.filteredPosts = this.filterInMemory(this.allPosts);
  }

  public get postsView(): IPost[] {
    return this.cleanSearchText.length > 0 ? this.filteredPosts : this.allPosts;
  }

  private get cleanSearchText() {
    if (!this.searchText) {
      return "";
    }

    return this.searchText.trim().toLowerCase();
  }
}