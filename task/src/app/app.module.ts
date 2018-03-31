import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoToDisplayComponent } from './info-to-display/info-to-display.component';
import { CardWithInfoComponent } from './card-with-info/card-with-info.component';
import { Service } from './service';

const appRoutes: Routes = [
  { path: 'info', component: InfoToDisplayComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoToDisplayComponent,
    CardWithInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
