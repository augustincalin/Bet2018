import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MainData } from './model/main/mainData.model';

@Injectable()
export class MainService {
    constructor(private http: HttpClient) { }
    getMainData() {
        return this.http.get<MainData>('/api/main/getmaindata');
    }
}
