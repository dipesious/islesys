import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DependencyService } from 'src/app/services/dependency.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SignitureService } from 'src/app/services/signiture.service';
import { UserModel } from 'src/app/universal.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  cartList = [
    {id:'price_1LuTMaENE7uabJh2F2h4YBiO', name:"Startup Community", way:"79 First Year then $99", price:99, cost:79, during:"1 Year" },
    {id:'price_1LuTPKENE7uabJh2rrXnRV5u', name:"Pledged Community", way:"33/year Prepaid", price:297, cost:99, during:"3 Year" },
    {id:'price_1LuTQrENE7uabJh2aYyTOtfT', name:"Prepaid Enterprise", way:"499/month Prepaid", price:499, cost:499 , during:"Monthly" },
  ]

  cartPack = this.cartList[1];
  checkX = "";

  nameCompany = "";
  cardCompany = "";
  codeCompany = "";
  makingChanges = false;

  xPay = {
    paymethod:"CARD",
    // name:"", 
    // card:"", cvv:"", MmYy:"",
    card:"4242 4242 4242 4242", MmYy:"12 / 34", cvv:"567",
    vpa:"",
    email:"",
  }

  constructor(
    public auth: AuthService,
    public resource: ResourceService,
    private sign: SignitureService,
    private depends: DependencyService,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar,

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
          this.cartPack = this.cartList[0];
        }
        if( pack == 'upgrade-account' ){
          this.cartPack = this.cartList[1];
        }
        if( pack == 'apply-for-enterprise' ){
          this.cartPack = this.cartList[2];
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

  setPAY(x:any){
    if(!this.makingChanges){
      this.xPay.paymethod = x;
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
        const data = {
          id:"", name:mine.name, by: mine.uid, to:"Islesys",
          productID:this.cartPack.id,
          coin:mine.coin, iso:mine.iso, 
          phone:mine.phone, email:mine.email,
          companyCARD:this.cardCompany, companyCODE:this.codeCompany, companyNAME:this.nameCompany,
          cost:this.cartPack.cost, price:this.cartPack.price, save:(this.cartPack.price - this.cartPack.cost), 
          pack:(
            ( this.cartList[0] == this.cartPack ? "community":"") +
            ( this.cartList[1] == this.cartPack ? "community":"") +
            ( this.cartList[2] == this.cartPack ? "enterprise":"") +
            "" ), 
            varient:this.cartPack.name, recuring:("" + 
            ( this.cartList[1] == this.cartPack ? "yearly":"") + 
            ( this.cartList[2] == this.cartPack ? "monthly":"") +
            "" ), 
          payment: this.xPay,
          status:0, sin:null
        }
  
        this.auth.submitWALT(data).then(refWalt => {
  
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
  
  if(this.xPay.paymethod == 'UPI'){
  
  }
  
  if(this.xPay.paymethod == 'PAYPAL'){
  
  }
  
        })
  
      })
  
    }
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
