import { Component, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { MainService } from './main.service';
import { OnInit } from '@angular/core';
import { MainData } from './model/mainData.model';


@Component({
    selector: 'bet-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    sideNavOpen = true;
    watcher: Subscription;
    activeMediaQuery = '';
    mainData: MainData;
    constructor(private media: ObservableMedia, private router: Router, private mainService: MainService) {
        this.watcher = media.subscribe((change: MediaChange) => {
            this.sideNavOpen = !this.media.isActive('xs');
        });
    }

    ngOnInit(): void {
        this.mainService.getMainData().subscribe(data => this.mainData = { ...data });
    }

    ngOnDestroy(): void {

    }

    shouldSideNavOpened() {
        return this.sideNavOpen;
    }

    navigateTo(state: string, @Optional() fragment: string) {
        let a: any[] = [];
        a.push(state);
        if (fragment) {
            a.push(fragment);
        }
        this.router.navigate(a);
    }

}
