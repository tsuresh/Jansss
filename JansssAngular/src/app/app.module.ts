import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnterDetailsFormComponent } from './enter-details-form/enter-details-form.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { SelectCampaignComponent } from './select-campaign/select-campaign.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { CampaignDetailsPageComponent } from './campaign-details-page/campaign-details-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CampaignProgressComponent } from './campaign-progress/campaign-progress.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorSignUpComponent } from './vendor-sign-up/vendor-sign-up.component';
import {A11yModule} from "@angular/cdk/a11y";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    EnterDetailsFormComponent,
    ProgressBarComponent,
    HowItWorksComponent,
    LaunchPageComponent,
    ClientSignUpComponent,
    ClientLogInComponent,
    SelectCampaignComponent,
    SelectPaymentComponent,
    CampaignDetailsPageComponent,
    ProfilePageComponent,
    EditProfileComponent,
    CampaignProgressComponent,
    VendorLoginComponent,
    VendorSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
