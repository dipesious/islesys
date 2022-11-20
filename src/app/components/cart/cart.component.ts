import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DependencyService } from 'src/app/services/dependency.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SignitureService } from 'src/app/services/signiture.service';
import { WindowService } from 'src/app/services/window.service';
import { UserModel } from 'src/app/universal.model';

declare var RazorpayCheckout:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {




  cartPack = this.resource.cartList[1];
  checkX = "";

  nameCompany = "";
  cardCompany = "";
  codeCompany = "";
  makingChanges = false;

  xPay = {
    paymethod:"RAZORPAY",
  //   // name:"", 
    // card:"", cvv:"", MmYy:"",
  //   // card:"4242 4242 4242 4242", MmYy:"12 / 34", cvv:"567",
  //   vpa:"",
  //   email:"",
  }

  constructor(
    public auth: AuthService,
    public resource: ResourceService,
    private sign: SignitureService,
    private depends: DependencyService,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar,

    private winRef: WindowService,
  ) {
    let pack = this.actRoute.snapshot.params['pack'];

    this.auth.user$.pipe(take(1)).subscribe((mine:UserModel) => {
      if(!mine){

        if( pack == 'continue-upgrade' ){
          this.resource.router.navigate(['/sign/' + pack])
        }
        if( pack == 'upgrade-account' ){
          this.resource.router.navigate(['/sign/' + pack])
        }
        if( pack == 'apply-for-enterprise' ){
          this.resource.router.navigate(['/sign/' + pack])
        }

      }else{

        if( pack == 'continue-upgrade' ){
          this.cartPack = this.resource.cartList[0];
        }
        if( pack == 'upgrade-account' ){
          this.cartPack = this.resource.cartList[1];
        }
        if( pack == 'apply-for-enterprise' ){
          this.cartPack = this.resource.cartList[2];
        }

      }
    })
  
  }

  ngOnInit(): void {
  }

  getCost(){
    return this.cartPack.cost;
  }

  // goGIRL(){
  //   const data = {
  //     id:"", name:"Dipesh", 
  //     dial:"+91", phone:"9876543210", email:"email@domain.com",
  //     cost:79, price:99, save:20, 
  //     pack:"community", varient:"Startup Community", 
  //     status:0, sin:null
  //   }
  //   this.auth.submitWALT(data).then(refWalt => {
  //     this.depends.startStripe("IN", refWalt.id).pipe(take(1)).subscribe((ref:any) => {
  //       console.log("MANHANDLE", ref)
  //       if(!ref || !ref.success){
  
  //       }else{
  //         window.open(ref.data, "_self");
  //       }
  //     })
  //   })
  // }

  setCart(x:any){
    if(!this.makingChanges){
      this.cartPack = x;
    }
  }

  // setPAY(x:any){
  //   if(!this.makingChanges){
  //     this.xPay.paymethod = x;
  //   }
  // }

  submitPay(){
    this.makingChanges = true;
    if(
      !this.nameCompany ||
      !this.cardCompany ||
      !this.codeCompany ||
      false
      ){
      this.makingChanges = false;
      let mess = ( 
        !this.nameCompany ? "Project or Company name is Required!":(
          !this.cardCompany ? "ID Card name is Required!":(
            !this.codeCompany ? "Card ID is Required!":
            ("")))
      )
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{

      this.auth.user$.pipe(take(1)).subscribe(mine => {
        let cost = 0 + 
        (mine.coin == "INR" ? this.cartPack.costINR : 0) + 
        (mine.coin == "EUR" ? this.cartPack.costEUR : 0) + 
        (mine.coin == "USD" ? this.cartPack.costUSD : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || false) ? this.cartPack.costUSD : 0) + 
        0;
        let price = 0 + 
        (mine.coin == "INR" ? this.cartPack.priceINR : 0) + 
        (mine.coin == "EUR" ? this.cartPack.priceEUR : 0) + 
        (mine.coin == "USD" ? this.cartPack.priceUSD : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || false) ? this.cartPack.priceUSD : 0) + 
        0;
        let save = 0 + 
        (mine.coin == "INR" ? (this.cartPack.priceINR - this.cartPack.costINR) : 0) + 
        (mine.coin == "EUR" ? (this.cartPack.priceEUR - this.cartPack.costEUR) : 0) + 
        (mine.coin == "USD" ? (this.cartPack.priceUSD - this.cartPack.costUSD) : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || false) ? (this.cartPack.priceUSD - this.cartPack.costUSD) : 0) + 
        0;

        const data = {
          id:"", name:mine.name, by: mine.uid, to:"Islesys",
          productID:this.cartPack.id,
          coin:mine.coin, iso:mine.iso, 
          phone:mine.phone, email:mine.email,
          lieList:[
            this.nameCompany
          ], companyCARD:this.cardCompany, companyCODE:this.codeCompany, companyNAME:this.nameCompany,
          cost, price, save,
          days:this.cartPack.days, via:"islesys.com",
          pack:(
            ( this.resource.cartList[0] == this.cartPack ? "community":"") +
            ( this.resource.cartList[1] == this.cartPack ? "community":"") +
            ( this.resource.cartList[2] == this.cartPack ? "enterprise":"") +
            "" ), 
            varient:this.cartPack.name, recuring:("" + 
            ( this.resource.cartList[1] == this.cartPack ? "yearly":"") + 
            ( this.resource.cartList[2] == this.cartPack ? "monthly":"") +
            "" ), 
          payment: this.xPay,
          status:0, done:null, sin:null
        }
  
        this.auth.submitWALT(data).then(refWalt => {
  /*
  if(this.xPay.paymethod == 'CARD'){
    const payStripeCUST = mine.payStripeCUST || "";

          this.depends.startStripeNew("IN", 
          refWalt.id, data.by, 
          data.name, data.phone, data.email,
          data.productID,
          payStripeCUST
          // this.xPay.card, this.xPay.MmYy, this.xPay.cvv
          ).pipe(take(1)).subscribe((ref:any) => {
            // console.log("MANHANDLE", ref)
            if(!ref || !ref.success || !ref.data || !ref.data.url ){
              let mess = "There was a problem placing an order.";
              this.snackBar.open(mess, "", {
                horizontalPosition: "center", verticalPosition: "bottom", 
                duration: 2000,
                panelClass:"c_white" })
            }else{

              this.auth.updateFieldWALT(refWalt.id, "startDATA", ref.data).then(() => {
                if(payStripeCUST !== ref.payStripeCUST){
                  this.sign.updateFieldUSER(data.by, "payStripeCUST", payStripeCUST).then(() => {
                    window.open(ref.data.url, "_self");
                  })
                }else{
                  window.open(ref.data.url, "_self");
                }
              })

            }
          })
  }
  */
  if(this.xPay.paymethod == 'UPI'){
  
  }
  
  if(this.xPay.paymethod == 'PAYPAL'){
  
  }
  
  if(this.xPay.paymethod == 'RAZORPAY'){
    // const payStripeCUST = mine.payStripeCUST || "";

          this.depends.startRazorpayNew("IN", 
          refWalt.id, data.by, 
          data.name, data.phone, data.email,
          // data.productID,
          // payStripeCUST
          // this.xPay.card, this.xPay.MmYy, this.xPay.cvv
          data.cost,
          data.coin
          ).pipe(take(1)).subscribe((getPayRes:any) => {
            console.log("getPayRes", getPayRes);

            // console.log("MANHANDLE", ref)
            if(!getPayRes || !getPayRes.success //|| !ref.data || !ref.data.url 
              ){
              let mess = "There was a problem placing an order.";
              this.snackBar.open(mess, "", {
                horizontalPosition: "center", verticalPosition: "bottom", 
                duration: 2000,
                panelClass:"c_white" })
            }else{
                  
        getPayRes.modal = {
          ondismiss: () => {
            console.log("ondismiss")
            this.payStatus(refWalt.id, -10, "Payment Exited, Try again...", {});
          },
        };
        getPayRes.handler = (response:any, error:any) => {
          console.log("hello bro: ")
          if (response) {
          console.log("response: ", response)
          const dataVerify = {
            amount:data.cost, currency:data.coin,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            order_id: response.razorpay_order_id
          }
          console.log("dataVerify",dataVerify)
          this.payStatus(refWalt.id, 10, "Payment Success!", response);

          //Check if success
          }
          if(error){
            console.log("error: ", error)
            this.payStatus(refWalt.id, -10, "Payment Failed, Try again...", error); // You need to store error
          }
        };

/*
              this.auth.updateFieldWALT(refWalt.id, "startDATA", ref.data).then(() => {
                console.log("startDATA")
                // if(payStripeCUST !== ref.payStripeCUST){
                //   this.sign.updateFieldUSER(data.by, "payStripeCUST", payStripeCUST).then(() => {
                //     window.open(ref.data.url, "_self");
                //   })
                // }else{
                //   window.open(ref.data.url, "_self");
                // }
              })
*/
        const rzp = new this.winRef.nativeWindow.Razorpay(getPayRes);
        rzp.open();

            }
          })
  }
  
        })
  
      })
  
    }
  }

  payStatus(id:string, status:number, info:string, happen:any){
    const data = {
      info, happen
    }
    this.auth.updateFieldWALT(id, "endDATA", data).then(() => {
      console.log("startDATA")
    })
  }

  // startPay(){
  //   this.disableALL = true;
  //   if(
  //     this.xPay.paymethod == 'CARD' && (!this.xPay.card || !this.xPay.MmYy || !this.xPay.cvv) ||
  //     this.xPay.paymethod == 'UPI' && (!this.xPay.vpa) ||
  //     this.xPay.paymethod == 'PAYPAL' && (!this.xPay.email) ||
  //     false
  //   ){
  //     this.disableALL = false;
  //     let mess = "Enter proper payment details.";
  //     this.snackBar.open(mess, "", {
  //       horizontalPosition: "center", verticalPosition: "bottom", 
  //       duration: 2000,
  //       panelClass:"c_white" })
  //   }else{
      
  //   }
  // }

/*
    card_format(value:any) {
      var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      var matches = v.match(/\d{4,16}/g);
      var match = (matches && matches[0]) || "";
      var parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        this.xPay.card = parts.join(" ");
      } else {
        this.xPay.card = value;
      }
    }

    ex_format(value:any) {
      var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      var matches = v.match(/\d{2,4}/g);
      var match = (matches && matches[0]) || "";
      var parts = [];
      for (let i = 0, len = match.length; i < len; i += 2) {
        parts.push(match.substring(i, i + 2));
      }
      if (parts.length) {
        this.xPay.MmYy = parts.join(" / ");
      } else {
        this.xPay.MmYy = value;
      }
    }
*/

/*

document.getElementById("card_number").oninput = function () {
  this.value = card_format(this.value);
};


document.getElementById("card_date").oninput = function () {
  this.value = ex_format(this.value);
};

function checkDigit(event) {
  var code = event.which ? event.which : event.keyCode;

  if ((code < 48 || code > 57) && code > 31) {
    return false;
  }

  return true;
}

*/
}
