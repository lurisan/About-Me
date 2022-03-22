import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeV2Component } from './home-v2/home-v2.component';
import { ProtfolioV2RoutingModule } from './protfolio-v2-routing.module';

@NgModule({
  declarations: [
    HomeV2Component
  ],
  imports: [
    CommonModule,
    ProtfolioV2RoutingModule
  ],
  exports: [
    HomeV2Component
  ]
})
export class ProtfolioV2Module { }
