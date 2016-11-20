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
  constructor(private http: Http) { }

  ngOnInit() {
  }

  public fetchWithAlert() {
    console.log("got to fetchWithAlert");
    this.http
      .get("https://jsonplaceholder.typicode.com/postsss")
      .catch((error) => {
        alert('got error' + error);
        return Observable.throw(error);
      })
      .subscribe(response => {
        let data = response.json();
        alert('got here! total count is: ' + data.length);
      });
  }
}