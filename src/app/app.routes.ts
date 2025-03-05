import { Routes } from '@angular/router';
import {SmsUIComponent} from '../components/sms-ui/sms-ui.component';

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
    path: '**',
    redirectTo: 'purchase',
  },

];
