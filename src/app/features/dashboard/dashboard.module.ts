import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavBarSectionComponent } from './components/nav-bar-section/nav-bar-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { SharedModule } from '../shared/shared/shared.module';
import { LowerHeaderComponent } from './components/lower-header/lower-header.component';
import { FloatToIntPipePipe } from './pipe/FloatToIntPipe.pipe';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { UpperFooterComponent } from './components/upper-footer/upper-footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavBarSectionComponent,
    HeaderSectionComponent,
    HomeSectionComponent,
    FooterSectionComponent,
    LowerHeaderComponent,
    ProgramDetailsComponent,
    UpperFooterComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    NavBarSectionComponent,
    DashboardComponent,
    LowerHeaderComponent,
    UpperFooterComponent,
  ]
})
export class DashboardModule { }
