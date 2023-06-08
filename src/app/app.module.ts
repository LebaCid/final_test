import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { BlogComponent } from './Component/blog/blog.component';
import { CaseStudyComponent } from './Component/case-study/case-study.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { DownloadCapabilityComponent } from './Component/download-capability/download-capability.component';
import { LetsTalkComponent } from './Component/lets-talk/lets-talk.component';
import { RequestProposalComponent } from './Component/request-proposal/request-proposal.component';
import { ServicesComponent } from './Component/services/services.component';
import { defineElement } from 'lord-icon-element';
import Lottie from 'lottie-web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    CaseStudyComponent,
    ClientsComponent,
    ContactUsComponent,
    DownloadCapabilityComponent,
    LetsTalkComponent,
    RequestProposalComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
    defineElement(Lottie.loadAnimation);
  }
}
