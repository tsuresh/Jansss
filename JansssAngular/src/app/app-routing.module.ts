import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {EnterDetailsFormComponent} from './enter-details-form/enter-details-form.component';
import {LaunchPageComponent} from './launch-page/launch-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'enter-details-form', component: EnterDetailsFormComponent},
  {path: 'launch-page', component: LaunchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
