import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeAgoPipe} from 'time-ago-pipe';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message-service/message.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import { ClipboardModule } from 'ngx-clipboard';

import {GameTableComponent} from './game-table/game-table.component';
import {DjangoClientService} from './django-client/django-client.service';
import {BlogpostComponent} from './blogpostDetail/blogpost.component';
import {BlogpostsComponent} from './blogposts/blogposts.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {BlogpostsService} from './blogposts-service/blogposts.service';
import {PaginationserviceService} from './paginationservice/paginationservice.service';
import {AuthService} from './auth/auth.service';
import {GameChartComponent} from './game-chart/game-chart.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {AuthGuard} from './auth/auth.guard';
import {TokenInterceptorService} from './auth/token-interceptor.service';
import {LogInToCommentComponent} from './log-in-to-comment/log-in-to-comment.component';
import {SuggestionFormComponent} from './suggestion-form/suggestion-form.component';
import { SuggestionCommentFormComponent } from './suggestion-comment-form/suggestion-comment-form.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { ProfilePageLinkAccountComponent } from './profile-page-link-account/profile-page-link-account.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ChartsModule,
    ClipboardModule,
  ],
  providers: [
    MessageService,
    DjangoClientService,
    BlogpostsService,
    PaginationserviceService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    NavBarComponent,
    SuggestionsComponent,
    GameTableComponent,
    TimeAgoPipe,
    BlogpostComponent,
    BlogpostsComponent,
    RegisterComponent,
    LoginComponent,
    GameChartComponent,
    ProfilePageComponent,
    LogInToCommentComponent,
    SuggestionFormComponent,
    SuggestionCommentFormComponent,
    HighscoresComponent,
    ProfilePageLinkAccountComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
