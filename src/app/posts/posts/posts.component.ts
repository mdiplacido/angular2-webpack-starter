import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    this.http.get(url)
      .catch((error) => {
        alert('got error' + error);
        return Observable.throw(error);
      })
      .subscribe(response => {
        let data = response.json();
        // alert("got here! total count is: " + data.length);
        this.posts = data;
      });
  }
}