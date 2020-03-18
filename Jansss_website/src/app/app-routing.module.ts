import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { PricingComponent } from './pricing/pricing.component'; // Add this
import { ContactUsComponent } from './contact-us/contact-us.component'; // Add this


const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'pricing', component: PricingComponent },      // Add this
  { path: 'contact-us', component: ContactUsComponent }           // Add this

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }