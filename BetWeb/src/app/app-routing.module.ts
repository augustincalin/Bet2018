import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { PrizeComponent } from './prize/prize.component';
import { TopComponent } from './top/top.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
    { path: 'help', component: HelpComponent },
    { path: 'user/:username', component: UserComponent },
    { path: 'prize', component: PrizeComponent },
    { path: 'top', component: TopComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
