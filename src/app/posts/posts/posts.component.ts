import { PostService } from './../post.service';
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

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
    this.allPosts = [];
    this.filteredPosts = [];
    this.lastError = undefined;

    this.loading = true;
    this.postService.getPosts()
      .catch((error) => {
        this.lastError = error;
        return Observable.throw(error);
      })
      .finally(() => this.loading = false)
      .subscribe(posts => {
        // alert("got here! total count is: " + data.length);
        this.allPosts = posts;
        this.filteredPosts = this.filterInMemory(posts);
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