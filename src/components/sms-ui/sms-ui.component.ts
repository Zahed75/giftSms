import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-ui',
  templateUrl: './sms-ui.component.html',
  styleUrl: './sms-ui.component.css'
})
export class SmsUIComponent implements OnInit {
  captchaCode: string = ''; // Initialize with a default value

  constructor() {
    this.generateCaptcha();
  }

  ngOnInit() {
  }

  generateCaptcha(): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 6;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.captchaCode = result;
  }



}
