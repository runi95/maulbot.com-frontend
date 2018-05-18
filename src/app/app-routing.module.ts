import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {BlogpostComponent} from './blogpostDetail/blogpost.component';
import {BlogpostsComponent} from './blogposts/blogposts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'blog/:id', component: BlogpostComponent},
  {path: 'blog', component: BlogpostsComponent},
  {path: 'user/profile', component: ProfilePageComponent, canActivate: [AuthGuard]}

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
