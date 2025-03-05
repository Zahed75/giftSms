import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {SmsUIService} from '../../services/smsUI/sms-ui.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sms-ui',
  templateUrl: './sms-ui.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './sms-ui.component.css'
})
export class SmsUIComponent implements OnInit {
  captchaCode: string = ''; // Initialize with a default value
  purchase: any = {
    customer_name: '',
    mobile_no: '',
    product_code: '',
    invoice_no: ''
  };


  constructor(
    private smsUIService: SmsUIService
  ) {
    this.generateCaptcha();
  }

  router = inject(Router);

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


  onSubmit(): void {
    if (this.validateForm()) {
      this.smsUIService.checkPurchase(this.purchase).subscribe({
        next: (response) => {
          console.log('API Response:', response);
          alert('OTP sent successfully!');
          this.router.navigate(['/verification']); // Navigate to the verification page
        },
        error: (error) => {
          console.error('API Error:', error);
          alert('Failed to send OTP. Please try again.');
        }
      });
    } else {
      alert('Please fill out all fields and agree to the terms and conditions.');
    }
  }

  validateForm(): boolean {
    return (
      this.purchase.customer_name &&
      this.purchase.mobile_no &&
      this.purchase.product_code &&
      this.purchase.invoice_no
    );
  }


}
