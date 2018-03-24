import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HomeData } from '../model/home/homeData.model';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) { }
    getHomeData() {
        return this.http.get<HomeData>('/api/home/gethomedata');
    }
}
