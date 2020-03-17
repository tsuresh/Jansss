import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [CampaignDetailsComponent, EditProfileComponent, MyProfileComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
