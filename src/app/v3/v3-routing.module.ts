import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { HomeComponent as BlogComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V3RoutingModule { }
