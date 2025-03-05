import { Routes } from '@angular/router';
import {SmsUIComponent} from '../components/sms-ui/sms-ui.component';
import {OtpComponent} from '../components/otp/otp.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full',
  },

  {
    path:'purchase',
    component:SmsUIComponent,
    children:[

    ]
  },
  {
    path: 'verification',
    component: OtpComponent,

  },

  {
    path: '**',
    redirectTo: 'purchase',
  },

];
