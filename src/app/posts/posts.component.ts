import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  lastError: any;
  posts: any[];
  loading = false;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
    console.log("got to fetchWithAlert");
    this.lastError = undefined;
    this.loading = true;
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
        this.posts = data;
      });
  }
}