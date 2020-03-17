import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterCampaignDetailsComponent } from './enter-campaign-details/enter-campaign-details.component';
import { SelectCampaignComponent } from './select-campaign/select-campaign.component';
import { SelectPaymentMethodComponent } from './select-payment-method/select-payment-method.component';
import { LaunchCampaignComponent } from './launch-campaign/launch-campaign.component';



@NgModule({
  declarations: [EnterCampaignDetailsComponent, SelectCampaignComponent, SelectPaymentMethodComponent, LaunchCampaignComponent],
  imports: [
    CommonModule
  ]
})
export class StartCampaignModule { }
