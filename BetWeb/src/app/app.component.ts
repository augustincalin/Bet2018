import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';


@Component({
  selector: 'bet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  sideNavOpen = true;
  watcher: Subscription;
  activeMediaQuery = '';

  constructor(private media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.sideNavOpen = !this.media.isActive('xs');
    });
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  shouldSideNavOpened() {
    return this.sideNavOpen;
  }

}
