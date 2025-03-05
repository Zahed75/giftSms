import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private mobileNumber: string = '';

  setMobileNumber(mobileNumber: string): void {
    this.mobileNumber = mobileNumber;
  }

  getMobileNumber(): string {
    return this.mobileNumber;
  }
}
