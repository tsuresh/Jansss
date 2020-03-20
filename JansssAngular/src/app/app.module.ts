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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    VendorSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
