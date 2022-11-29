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


  setCart(x:any){
    if(!this.makingChanges){
      this.cartPack = x;
    }
  }


  submitPay(){
    this.makingChanges = true;
    if(
      !this.nameCompany ||
      !this.cardCompany ||
      !this.codeCompany ||
      false
      ){
      this.makingChanges = false;
     let mess =  ( 
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
        (mine.coin == "RUB" ? this.cartPack.costRUB : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || mine.coin !== "RUB" || false) ? this.cartPack.costUSD : 0) + 
        0;
        let price = 0 + 
        (mine.coin == "INR" ? this.cartPack.priceINR : 0) + 
        (mine.coin == "EUR" ? this.cartPack.priceEUR : 0) + 
        (mine.coin == "USD" ? this.cartPack.priceUSD : 0) + 
        (mine.coin == "RUB" ? this.cartPack.priceRUB : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || mine.coin !== "RUB" || false) ? this.cartPack.priceUSD : 0) + 
        0;
        let save = 0 + 
        (mine.coin == "INR" ? (this.cartPack.priceINR - this.cartPack.costINR) : 0) + 
        (mine.coin == "EUR" ? (this.cartPack.priceEUR - this.cartPack.costEUR) : 0) + 
        (mine.coin == "USD" ? (this.cartPack.priceUSD - this.cartPack.costUSD) : 0) + 
        (mine.coin == "RUB" ? (this.cartPack.priceRUB - this.cartPack.costRUB) : 0) + 
        ((mine.coin !== "INR" || mine.coin !== "EUR" || mine.coin !== "USD" || mine.coin !== "RUB" || false) ? (this.cartPack.priceUSD - this.cartPack.costUSD) : 0) + 
        0;

        const data = {
          id:"", name:mine.name, by: mine.uid, to:"ISLESYS.COM",
          productID:this.cartPack.id,
          coin:mine.coin, iso:mine.iso, 
          phone:mine.phone, email:mine.email,
          lieList:[
            this.nameCompany
          ], companyCARD:this.cardCompany, companyCODE:this.codeCompany, companyNAME:this.nameCompany,
          cost: cost, 
          price, save,
          days:this.cartPack.days, via:"islesys.com Web",
          pack:(
            ( this.resource.cartList[0] == this.cartPack ? "community":"") +
            ( this.resource.cartList[1] == this.cartPack ? "community":"") +
            ( this.resource.cartList[2] == this.cartPack ? "enterprise":"") +
            "" ), 
            varient:this.cartPack.name, recuring:("" + 
            ( this.resource.cartList[0] == this.cartPack ? "Annual":"") + 
            ( this.resource.cartList[1] == this.cartPack ? "Triennial":"") + 
            ( this.resource.cartList[2] == this.cartPack ? "Monthal":"") +
            "" ), 
          payment: this.xPay,
          status:0, done:null, sin:null
        }
  
        this.auth.submitWALT(data).then(refWalt => {
  
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
          data.coin,
          (data.recuring == "Monthal" ? true : false)
          ).pipe(take(1)).subscribe((getPayRes:any) => {
            console.log("getPayRes", getPayRes);

            // console.log("MANHANDLE", ref)
            if(!getPayRes || !getPayRes.success //|| !ref.data || !ref.data.url 
              ){
              this.makingChanges = false;
              let mess = "There was a problem placing an order.";
              this.payStatus(false, refWalt.id, -10, mess, {}, data.by, data.pack, data.days)
              this.snackBar.open(mess, "", {
                horizontalPosition: "center", verticalPosition: "bottom", 
                duration: 2000,
                panelClass:"c_white" })
            }else{
                  
        getPayRes.modal = {
          ondismiss: () => {
            console.log("ondismiss")
            // this.nameCompany = "";
            // this.cardCompany = "";
            // this.codeCompany = "";
            this.makingChanges = false;
            let mess = "Payment Exited, Try again...";
            this.payStatus(false, refWalt.id, -10, mess, {}, data.by, data.pack, data.days)
            this.snackBar.open(mess, "", {
              horizontalPosition: "center", verticalPosition: "bottom", 
              duration: 2000,
              panelClass:"c_white" })
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
          this.payStatus(true, refWalt.id, 10, "Payment Success!", response, data.by, data.pack, data.days);

          //Check if success
          }

          if(error){
            console.log("error: ", error)
            this.payStatus(false, refWalt.id, -10, "Payment Failed, Try again...", error, data.by, data.pack, data.days); // You need to store error
          }

        };


        const rzp = new this.winRef.nativeWindow.Razorpay(getPayRes);
        rzp.open();

            }
          })
  }
  
        })
  
      })
  
    }
  }

  payStatus(state:boolean, id:string, status:number, info:string, happen:any, 
    uid:string, type:string, days:number){
    const data = {
      info, happen
    }
    this.auth.updateFieldWALT(state, id, "endDATA", data, status, uid, type, days).then(() => {
      console.log("startDATA")
      this.resource.router.navigate(['/order-status/' + id])
    })
  }



}
