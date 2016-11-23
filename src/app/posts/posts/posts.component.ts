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
  posts: any;
  loading = false;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
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
        this.posts = data;
      });
  }
}