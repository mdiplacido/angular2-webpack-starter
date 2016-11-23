import { IPost } from './../model/post';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  lastError: any;
  loading = false;

  searchText: string;

  allPosts: IPost[] = [];
  filteredPosts: IPost[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
    this.allPosts = [];
    this.filteredPosts = [];
    this.lastError = undefined;
    let url = "https://jsonplaceholder.typicode.com/posts";
    this.loading = true;
    this.http.get(url)
      .catch((error) => {
        this.lastError = error;
        return Observable.throw(error);
      })
      .finally(() => this.loading = false)
      .subscribe(response => {
        let data = response.json();
        // alert("got here! total count is: " + data.length);
        this.allPosts = data;
        this.filteredPosts = this.filterInMemory(data);
      });
  }

  public searchTextChanged() {
    this.filteredPosts = this.filterInMemory(this.allPosts);
  }

  public filterInMemory(posts: IPost[]) {
    let text = this.cleanSearchText;
    if (text.length === 0) {
      return posts;
    }

    return posts.filter(post => post.body.toLowerCase().indexOf(text) !== -1);
  }

  public get cleanSearchText() {
    if (!this.searchText) {
      return "";
    }

    return this.searchText.trim().toLowerCase();
  }

  public get postsView(): IPost[] {
    return this.cleanSearchText.length > 0 ? this.filteredPosts : this.allPosts;
  }
}