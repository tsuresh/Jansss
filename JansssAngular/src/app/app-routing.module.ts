import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnterDetailsFormComponent } from './enter-details-form/enter-details-form.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { SelectCampaignComponent } from './select-campaign/select-campaign.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { CampaignDetailsPageComponent } from './campaign-details-page/campaign-details-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {CampaignProgressComponent} from './campaign-progress/campaign-progress.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {VendorLoginComponent} from './vendor-login/vendor-login.component';
import {VendorSignUpComponent} from './vendor-sign-up/vendor-sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'details', component: EnterDetailsFormComponent},
  {path: 'campaign', component: SelectCampaignComponent},
  {path: 'payment', component: SelectPaymentComponent},
  {path: 'launch', component: LaunchPageComponent},
  {path: 'client-sign-up', component: ClientSignUpComponent},
  {path: 'client-log-in', component: ClientLogInComponent},
  {path: 'progress', component: CampaignProgressComponent},
  {path: 'campaign-details', component: CampaignDetailsPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'vendor-login', component: VendorLoginComponent},
  {path: 'vendor-signup', component: VendorSignUpComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
