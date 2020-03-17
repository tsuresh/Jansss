import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { ClientLogInComponent } from './client-log-in/client-log-in.component';
import { VendorSignUpComponent } from './vendor-sign-up/vendor-sign-up.component';
import { VendorLogInComponent } from './vendor-log-in/vendor-log-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [ClientSignUpComponent, ClientLogInComponent, VendorSignUpComponent, VendorLogInComponent, ContactUsComponent, PricingComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
