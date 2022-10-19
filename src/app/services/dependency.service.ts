import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // startStripe(iso:string, id:string, by:string){
  //   const body = { id, by }
  //   console.log("send email")
  //   return this.httpClient.post(`${environment.server}/api/create-checkout-session/${ iso }`, body);
  // }

  startStripeNew(iso:string, 
    id:string, by:string, 
    name:string, phone:string, email:string,
    productID:string,
    payStripeCUST:string
    // CARD:string, MMYY:string, CVV:string,
    ){
    const body = {
      id, by, 
      description:"Community Pack",
      name, phone, email,
      productID, payStripeCUST
      // CARD, MMYY, CVV
    }
    console.log("send email")
    return this.httpClient.post(`${environment.server}/api/payments/create-payment/${ iso }`, body);
  }

}
