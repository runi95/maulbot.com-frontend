import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';


// import {HomeComponent} from './home/home.component'
const appRoutes: Routes = [
    {
      path: '',
      component : HeroesComponent,
    },

  ];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}