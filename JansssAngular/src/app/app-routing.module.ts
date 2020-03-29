import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {EnterDetailsFormComponent} from './enter-details-form/enter-details-form.component';
import {LaunchPageComponent} from './launch-page/launch-page.component';
import {ClientSignUpComponent} from './client-sign-up/client-sign-up.component';
import {SelectCampaignComponent} from './select-campaign/select-campaign.component';
import {SelectPaymentComponent} from './select-payment/select-payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'enter-details-form', component: EnterDetailsFormComponent},
  {path: 'select-campaign', component: SelectCampaignComponent},
  {path: 'select-payment', component: SelectPaymentComponent},
  {path: 'launch-page', component: LaunchPageComponent},
  {path: 'client-sign-up', component: ClientSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
