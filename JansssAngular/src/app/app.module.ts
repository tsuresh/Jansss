import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { HomeComponent } from './component/home/home.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterDetailsFormComponent } from './component/enter-details-form/enter-details-form.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { LaunchPageComponent } from './component/launch-page/launch-page.component';
import { ClientSignUpComponent } from './component/client-sign-up/client-sign-up.component';
import { ClientLogInComponent } from './component/client-log-in/client-log-in.component';
import { SelectCampaignComponent } from './component/select-campaign/select-campaign.component';
import { SelectPaymentComponent } from './component/select-payment/select-payment.component';
import { CampaignDetailsPageComponent } from './component/campaign-details-page/campaign-details-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { CampaignProgressComponent } from './component/campaign-progress/campaign-progress.component';
import { VendorLoginComponent } from './component/vendor-login/vendor-login.component';
import { VendorSignUpComponent } from './component/vendor-sign-up/vendor-sign-up.component';
import { UserOptionPageComponent } from './component/user-option-page/user-option-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CampaignDetailsDescriptionComponent } from './component/campaign-details-description/campaign-details-description.component';
import { VendorHubHomePageComponent } from './component/vendor-hub-home-page/vendor-hub-home-page.component';
import { VendorEditProfileComponent } from './component/vendor-edit-profile/vendor-edit-profile.component';
/* Angular forms */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
/* Angular material */
import {MatAutocompleteModule, MatSnackBarModule, MatDialogModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {AuthInterceptor} from './interceptor/auth-interceptor';



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
    SubscriptionComponent,
    CampaignDetailsDescriptionComponent,
    VendorHubHomePageComponent,
    VendorEditProfileComponent,
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
    AngularMaterialModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
