import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HooksComponent } from './components/hooks/hooks.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  }
];
