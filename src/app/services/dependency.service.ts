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
      description:"islesys Pack",
      name, phone, email,
      productID, payStripeCUST
      // CARD, MMYY, CVV
    }
    return this.httpClient.post(`${environment.server}/api/payments/create-stripe-payment/${ iso }`, body);
  }
/*
name	uppercase	lowercase
alpha	Α	α
beta	Β	β
gamma	Γ	γ
delta	Δ	δ - SENT 2 THE COMPANY
epsilon	Ε	ε
zeta	Ζ	ζ
eta	Η	η
theta	Θ	θ
iota	Ι	ι
kappa	Κ	κ
lambda	Λ	λ
mu	Μ	μ
nu	Ν	ν
xi	Ξ	ξ
omicron	Ο	ο
pi	Π	π
rho	Ρ	ρ
sigma	Σ	σ
tau	Τ	τ
upsilon	Υ	υ
phi	Φ	φ
chi	Χ	χ
psi	Ψ	ψ
omega	Ω	ω
*/
  startRazorpayNew(iso:string, 
    orderId:string, by:string, 
    name:string, phone:string, email:string,
    // productID:string,
    // payRazorCUST:string
    payment:number,
    currency:string
    ){
    const obj = {
      orderId, by, 
      description:"New Pack",
      name, phone, email,
      // productID, payRazorCUST
      amount:payment,
      to:"Islesys Team",
      //about:"payment to xxx",
      theme:"#512da8",
      //referalCODE:"",
      //referalCashback:""
      currency:currency,
    }

    // const gwSIGN = response.razorpay_signature;
    // const gwORDR = response.razorpay_order_id;

    const bodyx = {
      type:"razorpay",
      gwID:obj.orderId,
      amount:obj.amount, currency:obj.currency,
      // amount_paid:obj.amount_paid,
      // amount_due:obj.amount_due,
      receipt:"receipt",

      name: obj.name,
      description: obj.description,
      userData: {
        name, phone, email
      },
      theme: obj.theme,
      // status:0
    }

    return this.httpClient.post(`${environment.server}/api/payments/create-razorpay-payment/${ iso }`, bodyx);
  }

  addDays(date:any, days:any) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  isExpired(done:any, days:number){
    if(!done){
      return false;
    }else{
      var today = new Date();
      return today > this.addDays(done, (days||0));
    }
  }

}
