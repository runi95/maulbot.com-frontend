import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {InMemoryDataService} from './inMemoryData-service/in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeAgoPipe} from 'time-ago-pipe';
import { ChartsModule } from 'ng2-charts';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {MessagesComponent} from './messages/messages.component';
import {HeroService} from './hero-service/hero.service';
import {MessageService} from './message-service/message.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';


import {GameTableComponent} from './game-table/game-table.component';
import {DjangoClientService} from './django-client/django-client.service';
import {SuggestionsService} from './suggestions-service/suggestions.service';
import {BlogpostComponent} from './blogpost/blogpost.component';
import {BlogpostsComponent} from './blogposts/blogposts.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {BlogpostsService} from './blogposts-service/blogposts.service';
import {PaginationserviceService} from './paginationservice/paginationservice.service';
import {AuthService} from './auth/auth.service';
import { GameChartComponent } from './game-chart/game-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ChartsModule,
  ],
  providers: [
    HeroService,
    MessageService,
    SuggestionsService,
    InMemoryDataService,
    DjangoClientService,
    BlogpostsService,
    PaginationserviceService,
    AuthService,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    NavBarComponent,
    SuggestionsComponent,
    GameTableComponent,
    TimeAgoPipe,
    BlogpostComponent,
    BlogpostsComponent,
    RegisterComponent,
    LoginComponent,
    GameChartComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
