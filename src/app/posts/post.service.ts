import { Observable } from 'rxjs/Observable';
import { IPost } from './post';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    constructor(private http: Http) {
    }

    public getPosts(): Observable<IPost[]> {
        return this.http
            .get("https://jsonplaceholder.typicode.com/posts")
            .map(response => response.json());
    }
}