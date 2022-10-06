import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOTPComponent implements OnInit {

  phone = "";
  code = {
    d1:"", d2:"", d3:"", d4:"", d5:"", d6:"",
  }
  makingChanges = false;

  constructor(
    private snackBar: MatSnackBar,
    private bsRef:MatBottomSheetRef<VerifyOTPComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) { 
    if(!data.phone){
      this.bsRef.dismiss();
    }else{
      this.phone = data.phone;
    }
    
  }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(
      !this.code.d1 ||
      !this.code.d2 ||
      !this.code.d3 ||
      !this.code.d4 ||
      !this.code.d5 ||
      !this.code.d6 ||
      this.validateCode()
    ){
      // console.log(this.code, 
      //   !this.code.d1 ,
      //   !this.code.d2 ,
      //   !this.code.d3 ,
      //   !this.code.d4 ,
      //   !this.code.d5 ,
      //   !this.code.d6 ,
      //   this.validateCode())
      this.makingChanges = false;
      this.snackMe("Enter proper OTP before you validate.")
    }else{
      const code = "" + this.code.d1 + this.code.d2 + this.code.d3 + this.code.d4 + this.code.d5 + this.code.d6;
      this.bsRef.dismiss({success:true, code:code});
    }
  }

  validateCode(){
    return false;
  }

  snackMe(mess:string){
    this.snackBar.open(mess,"", {
      horizontalPosition: "center", verticalPosition: "bottom", 
      duration: 2000,
      panelClass:"c_white" })
  }

}
