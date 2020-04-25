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
import {A11yModule} from '@angular/cdk/a11y';
import { UserOptionPageComponent } from './user-option-page/user-option-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule} from '@angular/common/http';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatBadgeModule} from "@angular/material/badge";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CampaignDetailsDescriptionComponent } from './campaign-details-description/campaign-details-description.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule, MatDatepickerModule, MatFormFieldModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
/* Angular material */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AngularMaterialModule} from './angular-material/angular-material.module';

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
    UserOptionPageComponent,
    LandingPageComponent,
    CampaignDetailsDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    A11yModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    AngularMaterialModule
    MatFormFieldModule,
    MatInputModule,
    MatPasswordStrengthModule.forRoot(),
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
