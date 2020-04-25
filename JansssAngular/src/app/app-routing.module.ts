import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './component/pricing/pricing.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EnterDetailsFormComponent } from './component/enter-details-form/enter-details-form.component';
import { LaunchPageComponent } from './component/launch-page/launch-page.component';
import { ClientSignUpComponent } from './component/client-sign-up/client-sign-up.component';
import { SelectCampaignComponent } from './component/select-campaign/select-campaign.component';
import { SelectPaymentComponent } from './component/select-payment/select-payment.component';
import { ClientLogInComponent } from './component/client-log-in/client-log-in.component';
import { CampaignDetailsPageComponent } from './component/campaign-details-page/campaign-details-page.component';
import {ProfilePageComponent} from './component/profile-page/profile-page.component';
import {EditProfileComponent} from './component/edit-profile/edit-profile.component';
import {CampaignProgressComponent} from './component/campaign-progress/campaign-progress.component';
import {HowItWorksComponent} from './component/how-it-works/how-it-works.component';
import {VendorLoginComponent} from './component/vendor-login/vendor-login.component';
import {VendorSignUpComponent} from './component/vendor-sign-up/vendor-sign-up.component';
import {UserOptionPageComponent} from './component/user-option-page/user-option-page.component';

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
  {path: 'vendor-sign-up', component: VendorSignUpComponent},
  {path: 'vendor-log-in', component: VendorLoginComponent},
  {path: 'progress', component: CampaignProgressComponent},
  {path: 'campaign-details', component: CampaignDetailsPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'vendor-login', component: VendorLoginComponent},
  {path: 'vendor-signup', component: VendorSignUpComponent},
  {path: 'user-option', component: UserOptionPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
