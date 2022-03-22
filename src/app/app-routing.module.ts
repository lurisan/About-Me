import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./v3/v3.module').then(m => m.V3Module)
    // redirectTo: 'home'
  },
  {
    path: 'blog',
    component: HomeComponent
  },
  {
    path:'home',
    loadChildren: () => import('./portfolio/protfolio-v2.module').then(m => m.ProtfolioV2Module)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
