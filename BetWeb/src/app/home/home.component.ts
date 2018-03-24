import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomeData } from '../model/home/homeData.model';

@Component({
  selector: 'bet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    homeData: HomeData;

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.homeService.getHomeData().subscribe(data => this.homeData = { ...data });
  }

}
