import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeAgoPipe} from 'time-ago-pipe';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';
import {SuggestionsComponent} from './suggestion/suggestions/suggestions.component';
import {ClipboardModule} from 'ngx-clipboard';

import {GameTableComponent} from './layout/game-table/game-table.component';
import {DjangoClientService} from './services/django-client/django-client.service';
import {BlogpostComponent} from './layout/blogpostDetail/blogpost.component';
import {BlogpostsComponent} from './layout/blogposts/blogposts.component';
import {RegisterComponent} from './account/register/register.component';
import {LoginComponent} from './account/login/login.component';
import {BlogpostsService} from './services/blogposts-service/blogposts.service';
import {PaginationserviceService} from './services/paginationservice/paginationservice.service';
import {AuthService} from './account/auth/auth.service';
import {GameChartComponent} from './layout/game-chart/game-chart.component';
import {ProfilePageComponent} from './account/profile-page/profile-page.component';
import {AuthGuard} from './account/auth/auth.guard';
import {AdminGuard} from './account/auth/admin.guard';

import {TokenInterceptorService} from './account/auth/token-interceptor.service';
import {LogInToCommentComponent} from './services/log-in-to-comment/log-in-to-comment.component';
import {SuggestionFormComponent} from './suggestion/suggestion-form/suggestion-form.component';
import {SuggestionCommentFormComponent} from './suggestion/suggestion-comment-form/suggestion-comment-form.component';
import {HighscoresComponent} from './layout/highscores/highscores.component';
import {ProfilePageLinkAccountComponent} from './account/profile-page-link-account/profile-page-link-account.component';
import {SafeHtmlPipe} from './services/html-pipe/safe-html.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminStatusBarComponent} from './admin/admin-status-bar/admin-status-bar.component';
import {AdminSuggestionsComponent} from './admin/admin-suggestions/admin-suggestions.component';
import {AdminTodosComponent} from './admin/admin-todos/admin-todos.component';
import {AdminBansComponent} from './admin/admin-bans/admin-bans.component';
import {ShopProductsComponent} from './shop/shop-products/shop-products.component';
import {ShopDetailComponent} from './shop/shop-detail/shop-detail.component';
import {SuggestionModalContent} from './services/suggestion-modal/suggestion-modal-content';
import { LoadingScreenComponent } from './tools/loading-screen/loading-screen.component';
import { MapToolsComponent } from './tools/map-tools/map-tools.component';
import { PrismModule } from '@ngx-prism/core'; // <----- Here
import { MarkdownModule } from 'ngx-markdown';
import { LibraryHCLComponent } from './tools/library-hcl/library-hcl.component';
import { LibraryMMDComponent } from './tools/library-mmd/library-mmd.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ChartsModule,
    ClipboardModule,
    PrismModule,
    MarkdownModule.forRoot({ loader: HttpClientModule }),
  ],
  providers: [
    DjangoClientService,
    BlogpostsService,
    PaginationserviceService,
    AuthService,
    AuthGuard,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
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
    SafeHtmlPipe,
    AdminStatusBarComponent,
    AdminSuggestionsComponent,
    AdminTodosComponent,
    AdminBansComponent,
    ShopProductsComponent,
    ShopDetailComponent,
    SuggestionModalContent,
    LoadingScreenComponent,
    MapToolsComponent,
    LibraryHCLComponent,
    LibraryMMDComponent,
  ],
  entryComponents: [SuggestionModalContent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
