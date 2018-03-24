import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbar } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { TopComponent } from './top/top.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

import { AppRoutingModule } from './app-routing.module';
import { MainService } from './main.service';
import { HomeService } from './home/home.service';


@NgModule({
    declarations: [
        AppComponent,
        PrizeComponent,
        TopComponent,
        UserComponent,
        HomeComponent,
        HelpComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        AppRoutingModule
    ],
    providers: [MainService, HomeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
