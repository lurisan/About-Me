import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { V3RoutingModule } from './v3-routing.module';
import { ProtfolioV2Module } from '../portfolio/protfolio-v2.module';



@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    V3RoutingModule,
    ProtfolioV2Module
  ]
})
export class V3Module { }
