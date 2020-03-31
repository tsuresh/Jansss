import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VendorSignUpComponent } from './vendor-sign-up/vendor-sign-up.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnterDetailsFormComponent } from './enter-details-form/enter-details-form.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { SelectCampaignComponent } from './select-campaign/select-campaign.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
>>>>>>> f4e0f98f3e06fb1b0a73512f0efe2b28766f7f7e

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    VendorSignUpComponent,
    EnterDetailsFormComponent,
    ProgressBarComponent,
    HowItWorksComponent,
    LaunchPageComponent,
    ClientSignUpComponent,
    ClientLogInComponent,
    SelectCampaignComponent,
    SelectPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> f4e0f98f3e06fb1b0a73512f0efe2b28766f7f7e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
