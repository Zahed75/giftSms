import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../enviornments/enviornment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsUIService {

  private checkPurchaseURL =`${environment.apiBaseUrl}/sms/api/generate-otp/`;
  private verifyOTPURL =`${environment.apiBaseUrl}/sms/api/verify-otp/`;
  private giftListURL =`${environment.apiBaseUrl}/sms/api/gifts/`;
  private http = inject(HttpClient);



  checkPurchase(customer:any):Observable<any>{
    return this.http.post<{message:string}>(this.checkPurchaseURL,customer).pipe(
      map((response)=>response)
    )
  }

  verifyOtp(otp:any):Observable<any>{
    return this.http.post<{message:string}>(this.verifyOTPURL,otp).pipe(
      map((response)=>response)
    )
  }


  getGiftList(): Observable<any> {
    return this.http.get<any[]>(this.giftListURL).pipe(
      map((response) => response)
    );
  }


}
