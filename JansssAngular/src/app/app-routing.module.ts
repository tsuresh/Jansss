import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
<<<<<<< HEAD
import {VendorSignUpComponent} from './vendor-sign-up/vendor-sign-up.component';
=======
import {EnterDetailsFormComponent} from './enter-details-form/enter-details-form.component';
import {LaunchPageComponent} from './launch-page/launch-page.component';
import {ClientSignUpComponent} from './client-sign-up/client-sign-up.component';
import {SelectCampaignComponent} from './select-campaign/select-campaign.component';
import {SelectPaymentComponent} from './select-payment/select-payment.component';
import {ClientLogInComponent} from './client-log-in/client-log-in.component';
>>>>>>> f4e0f98f3e06fb1b0a73512f0efe2b28766f7f7e

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact-us', component: ContactUsComponent},
<<<<<<< HEAD
  {path: 'vendorSignUp', component: VendorSignUpComponent}
=======
  {path: 'enter-details-form', component: EnterDetailsFormComponent},
  {path: 'select-campaign', component: SelectCampaignComponent},
  {path: 'select-payment', component: SelectPaymentComponent},
  {path: 'launch', component: LaunchPageComponent},
  {path: 'client-sign-up', component: ClientSignUpComponent},
  {path: 'client-log-in', component: ClientLogInComponent}
>>>>>>> f4e0f98f3e06fb1b0a73512f0efe2b28766f7f7e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
