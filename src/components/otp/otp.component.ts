import { Component, OnInit } from '@angular/core';
import { SmsUIService } from '../../services/smsUI/sms-ui.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import {FormsModule} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common'; // Import the shared service

@Component({
  selector: 'app-otp',
  imports:[
    FormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  timer: number = 60;
  isResendDisabled: boolean = true;
  verification: any = {
    mobile_no: '', // Will be populated from the shared service
    otp: ''
  };
  otpFields: string[] = ['', '', '', '', '', ''];

  constructor(
    private smsUIService: SmsUIService,
    private sharedService: SharedService, // Inject the shared service
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the mobile number from the shared service
    this.verification.mobile_no = this.sharedService.getMobileNumber();
    this.startTimer();
  }

  startTimer(): void {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(interval);
        this.isResendDisabled = false;
      }
    }, 1000);
  }

  resendOtp(): void {
    this.timer = 60;
    this.isResendDisabled = true;
    this.startTimer();
    // Add your API call to resend OTP here
  }

  onOtpInput(index: number, event: any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.otpFields[index] = value;
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="otp${index + 1}"]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
    this.verification.otp = this.otpFields.join('');
  }

  onOtpBackspace(index: number, event: any): void {
    const input = event.target as HTMLInputElement;
    if (!input.value && index > 0) {
      const prevInput = document.querySelector(`input[name="otp${index - 1}"]`) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.smsUIService.verifyOtp(this.verification).subscribe({
        next: (response) => {
          console.log('API Response:', response);
          alert('OTP verified successfully!');
          this.router.navigate(['/giftList']);
        },
        error: (error) => {
          console.error('API Error:', error);
          alert('Failed to verify OTP. Please try again.');
        }
      });
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  }

  validateForm(): boolean {
    return this.verification.otp.length === 6;
  }
}
