import { Routes } from '@angular/router';
import {SmsUIComponent} from '../components/sms-ui/sms-ui.component';
import {OtpComponent} from '../components/otp/otp.component';
import {GiftsComponent} from '../components/gifts/gifts.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full',
  },

  {
    path:'purchase',
    component:SmsUIComponent,
  },
  {
    path: 'verification',
    component: OtpComponent,

  },
  {
    path:'giftList',
    component:GiftsComponent
  },

  {
    path: '**',
    redirectTo: 'purchase',
  },

];
