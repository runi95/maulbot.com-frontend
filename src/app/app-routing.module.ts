import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {BlogpostComponent} from './blogpost/blogpost.component';
import {BlogpostsComponent} from './blogposts/blogposts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'blogpost', component: BlogpostComponent},
  {path: 'blogposts', component: BlogpostsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
