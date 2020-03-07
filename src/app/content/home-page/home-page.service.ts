import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IHomePageInterface} from 'src/app/content/home-page/home-page.interface';

@Injectable()

export class HomePageService {
    constructor(
        private http: HttpClient,
    ) {}

    public getPosts(): Observable<IHomePageInterface[]> {
        return this.http.get<IHomePageInterface[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
