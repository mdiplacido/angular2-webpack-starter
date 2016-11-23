import { IPost } from './model/post';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    private url = "https://jsonplaceholder.typicode.com";
    constructor(private http: Http) {

    }

    public getPosts(): Observable<IPost[]> {
        let allPosts = `${this.url}/posts`;
        return this.http
            .get(allPosts)
            .map(response => response.json());
    }
}