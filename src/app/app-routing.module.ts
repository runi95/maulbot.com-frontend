import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {SuggestionsComponent} from './suggestion/suggestions/suggestions.component';
import {BlogpostComponent} from './layout/blogpostDetail/blogpost.component';
import {BlogpostsComponent} from './layout/blogposts/blogposts.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {ProfilePageComponent} from './account/profile-page/profile-page.component';
import {AuthGuard} from './account/auth/auth.guard';
import {AdminGuard} from './account/auth/admin.guard';

import {HighscoresComponent} from './layout/highscores/highscores.component';
import {AdminBansComponent} from './admin/admin-bans/admin-bans.component';
import {AdminSuggestionsComponent} from './admin/admin-suggestions/admin-suggestions.component';
import {AdminTodosComponent} from './admin/admin-todos/admin-todos.component';
import {ShopProductsComponent} from './shop/shop-products/shop-products.component';
import {ShopDetailComponent} from './shop/shop-detail/shop-detail.component';
import {LoadingScreenComponent} from './tools/loading-screen/loading-screen.component';
import {MapToolsComponent} from './tools/map-tools/map-tools.component';
import {LibraryHCLComponent} from './tools/library-hcl/library-hcl.component';
import {LibraryMMDComponent} from './tools/library-mmd/library-mmd.component';

const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'suggestions/:id', component: SuggestionsComponent},
  {path: 'blog/:id', component: BlogpostComponent},
  {path: 'blog', component: BlogpostsComponent},
  {path: 'highscores', component: HighscoresComponent},
  {path: 'store', component: ShopProductsComponent},
  {path: 'store/:id', component: ShopDetailComponent},
  {path: 'user/profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'tools', component: MapToolsComponent},
  {path: 'tools/library/hcl', component: LibraryHCLComponent},
  {path: 'tools/library/mmd', component: LibraryMMDComponent},

  {path: 'tools/loadingscreen', component: LoadingScreenComponent, canActivate: [AuthGuard]},
  {path: 'admin/bans', component: AdminBansComponent, canActivate: [AdminGuard]},
  {path: 'admin/suggestions', component: AdminSuggestionsComponent, canActivate: [AdminGuard]},
  {path: 'admin/todo', component: AdminTodosComponent, canActivate: [AdminGuard]}




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
