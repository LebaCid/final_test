import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { BlogComponent } from './Component/blog/blog.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { DownloadCapabilityComponent } from './Component/download-capability/download-capability.component';
import { HomeComponent } from './Component/home/home.component';
import { RequestProposalComponent } from './Component/request-proposal/request-proposal.component';
import { ServicesComponent } from './Component/services/services.component';
import { CaseStudyComponent } from './Component/case-study/case-study.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'case-studies', component: CaseStudyComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'request-proposal', component: RequestProposalComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'download-capability', component: DownloadCapabilityComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
