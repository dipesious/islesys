import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SignitureService } from 'src/app/services/signiture.service';
import { UserModel } from 'src/app/universal.model';
import { VerifyOTPComponent } from '../verify-otp/verify-otp.component';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signUp:boolean = false;
  pass:boolean = false;
  currentTheme:string = 'light';

  userSign = {
    name:"",
    phone:"",
    email:"",
    pass:"",
    accept:false
  }

  userLog = {
    phone:"",
    pass:""
  }

  chosenNation = this.resource.nations[25];

  constructor(
    private snackBar: MatSnackBar,
    public sign: SignitureService,
    public auth: AuthService,
    public resource: ResourceService,
    private actRoute: ActivatedRoute,
    private bSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {

    this.auth.user$.pipe(take(1)).subscribe((mine:UserModel) => {
      if(!mine){

      }else{
        let pack = this.actRoute.snapshot.params['go'];
        if( !pack ){
          this.resource.router.navigate(['/explore'])
        }
        if( pack == 'continue-upgrade' ){
          this.resource.router.navigate(['/cart/' + pack])
        }
        if( pack == 'upgrade-account' ){
          this.resource.router.navigate(['/cart/' + pack])
        }
        if( pack == 'apply-for-enterprise' ){
          this.resource.router.navigate(['/cart/' + pack])
        }
        // this.resource.router.navigate(['/explore'])
      }
    })
  }


  // toggleTheme(w:any){
  //   this.currentTheme = w;
  // }





  signup(){
    this.sign.makingChanges = true;
    let completePhone = this.chosenNation.cc + this.userSign.phone
    //console.log(this.userSign)
    if(
      !this.chosenNation.cc || 
      !this.userSign.name || this.resource.testName(this.userSign.name) ||
      !this.userSign.phone || this.resource.testPhone(this.userSign.phone) ||
      !this.userSign.email || this.resource.testEmail(this.userSign.email) ||
      !this.userSign.pass || this.resource.testPass(this.userSign.pass) ||
      !this.userSign.accept
    ){
      let mess = "Fill Everithing Properly.";
      this.sign.makingChanges = false;
      this.snackMe(mess);
        // console.log(
        //   !this.chosenNation.cc , 
        //   !this.userSign.name , this.testName(this.userSign.name) ,
        //   !this.userSign.phone , this.testPhone(this.userSign.phone) ,
        //   !this.userSign.email , this.testEmail(this.userSign.email) ,
        //   !this.userSign.pass , this.testPass(this.userSign.pass) ,
        //   !this.userSign.accept
        // )
    }else{
      this.sign.checkIfExist(completePhone).then(cE => {

        if(!cE.success){
          let mess = "Processing failed...";
          this.sign.makingChanges = false;
          this.snackMe(mess);
        }else{
          if(!cE.exist){
            this.sign.setupReCapca();
            // create new user
            this.sign.createUser(completePhone)
            // create new user
            const refBS = this.bSheet.open(VerifyOTPComponent, {
              data:{cc:this.chosenNation.cc, phone:this.userSign.phone},
              disableClose:true
            });
            refBS.afterDismissed().subscribe(ref => {
              if(!ref || !ref.success){
                this.sign.makingChanges = false;
                this.snackMe("Failed to validate.")
              }else{
                console.log(ref.code)
                if(ref.code?.length < 6){
                  this.sign.makingChanges = false;
                  this.snackMe("issue: verification code invalid.")
                }else{
                  this.sign.confirmationResult.confirm(ref.code).then((credential:any) => {
                    //console.log(credential.user)
                    this.sign.setUpAccount(credential, 
                      this.userSign.name, this.userSign.pass, 
                      completePhone, 
                      this.userSign.email, 
                      this.chosenNation.iso, this.chosenNation.coin ).then(creUser => {
                        if(!creUser.success){
                          console.log(creUser.info);
                          this.sign.makingChanges = false;
                          this.snackMe(creUser.info);
                        }else{
                          
                          if(creUser.complete){
                            let uid:string = creUser.info;
                            // console.log("uid", uid);
                            this.sign.completeUserData(uid).then(() => {
                              this.sign.makingChanges = false;
                              this.snackMe("Welcome to islesys...");
                              this.sign.router.navigate(['/explore'])
                            })
                          }

                        };
                    })
                  }).catch((err:any) => {
                    console.log(err);
                    this.snackMe(err);
                  })
                }

              }
            })
          }else{
            let mess = "Account already Exist.";
            this.sign.makingChanges = false;
            this.snackMe(mess);
          }
        }
        

      }).catch(() => {
        let mess = "Something went wrong...";
        this.sign.makingChanges = false;
        this.snackMe(mess);
      })
    }
  }




  signin(methodX:string){

    if(methodX == 'password'){
      this.signInWithPassword()
    }

    if(methodX == 'google'){}
    if(methodX == 'twitter'){}
    if(methodX == 'microsoft'){}

  }

  signInWithPassword(){
    this.sign.makingChanges = true;
    let completePhone = this.chosenNation.cc + this.userLog.phone
    console.log(this.userLog)
    if(
      !this.chosenNation.cc || 
      !this.userLog.phone || this.resource.testPhone(this.userLog.phone) ||
      !this.userLog.pass || this.resource.testPass(this.userLog.pass) ||
      false
    ){
      let mess = "Fill Everithing Properly.";
      this.sign.makingChanges = false;
      this.snackMe(mess);
    }else{
      this.sign.checkIfExist(completePhone).then(cE => {
        if(!cE.success){
          let mess = "Processing failed...";
          this.sign.makingChanges = false;
          this.snackMe(mess);
        }else{
          if(!cE.exist){
            let mess = "Account does not Exist.";
            this.sign.makingChanges = false;
            this.snackMe(mess);
          }else{
            this.sign.signInWithPassword(completePhone, this.userLog.pass).then(s => {
              if(!s.success){
                this.sign.makingChanges = false;
                this.snackMe("issue: " + s.info);
              }else{
                if(!s.complete){
                  this.sign.makingChanges = false;
                  this.snackMe("Complete email verification.");
                }else{
                  this.sign.makingChanges = false;
                  this.snackMe("Welcome Back!");
                  
        let pack = this.actRoute.snapshot.params['go'];
        if( !pack ){
          this.resource.router.navigate(['/explore'])
        }
        if( pack == 'continue-upgrade' ){
          this.resource.router.navigate(['/cart/' + pack])
        }
        if( pack == 'upgrade-account' ){
          this.resource.router.navigate(['/cart/' + pack])
        }
        if( pack == 'apply-for-enterprise' ){
          this.resource.router.navigate(['/cart/' + pack])
        }

      
                }
              }
            }).catch(err => {
              this.sign.makingChanges = false;
              this.snackMe("issue: " + err);
            })
          }
        }
        
      }).catch(() => {
        let mess = "Something went wrong...";
        this.sign.makingChanges = false;
        this.snackMe(mess);
      })
    }
  }

  snackMe(mess:string){
    this.snackBar.open(mess,"", {
      horizontalPosition: "center", verticalPosition: "bottom", 
      duration: 2000,
      panelClass:"c_white" })
  }

}
