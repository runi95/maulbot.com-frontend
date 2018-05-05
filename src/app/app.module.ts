import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './inMemoryData-service/in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeAgoPipe} from 'time-ago-pipe';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {MessagesComponent} from './messages/messages.component';
import {HeroService} from './hero-service/hero.service';
import {MessageService} from './message-service/message.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SuggestionComponent } from './suggestion/suggestion.component';



import { GameTableComponent } from './game-table/game-table.component';
import {DjangoClientService} from './django-client/django-client.service';
import {SuggestionsService} from './suggestions-service/suggestions.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HeroService,
    MessageService,
    SuggestionsService,
    InMemoryDataService,
    DjangoClientService,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    NavBarComponent,
    SuggestionComponent,
    GameTableComponent,
    TimeAgoPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
