import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-otp',
  imports: [
    NgIf
  ],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent implements OnInit{


  timer: number = 60; // Initial timer value
  isResendDisabled: boolean = true; // Disable Resend OTP button initially

  constructor() {
  }

  ngOnInit(): void {
    this.startTimer(); // Start the timer when the component loads
  }

  // Start the 60-second timer
  startTimer(): void {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(interval); // Stop the timer
        this.isResendDisabled = false; // Enable Resend OTP button
      }
    }, 1000); // Update every second
  }

  // Handle Resend OTP button click
  resendOtp(): void {
    this.timer = 60; // Reset the timer
    this.isResendDisabled = true; // Disable Resend OTP button
    this.startTimer(); // Restart the timer
    // Add your API call to resend OTP here
  }

}
