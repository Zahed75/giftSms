import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../enviornments/enviornment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsUIService {

  private checkPurchaseURL =`${environment.apiBaseUrl}/sms/api/generate-otp/`
  private http = inject(HttpClient);



  checkPurchase(customer:any):Observable<any>{
    return this.http.post<{message:string}>(this.checkPurchaseURL,customer).pipe(
      map((response)=>response)
    )
  }


}
