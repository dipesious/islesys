import { Injectable } from '@angular/core';
import { Auth, RecaptchaVerifier, signInWithEmailAndPassword, signInWithPhoneNumber, updateEmail, updatePassword, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, serverTimestamp, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { fetchSignInMethodsForEmail } from '@firebase/auth';
import { UserModel } from '../universal.model';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class SignitureService {
  makingChanges = false;

  windowRef: any;
  confirmationResult: any;
  verificationId: string ="";

  constructor(
    public afAuth: Auth,
    private win: WindowService,
    private firestore: Firestore,
    public router: Router,
  ) { }

  setupReCapca(){
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {'size': 'invisible'}, this.afAuth);
    this.windowRef.recaptchaVerifier.render();
  }

  get getServerTimestamp(){ return serverTimestamp; }

  async checkIfExist(completePhone:string){
    // check if user exist redirect login else redirect 1 
    this.makingChanges = true;
    let email = completePhone + "@" + "islesys.com";
    // CHECK FOR USER
    const fetchSignMethodEmail = await fetchSignInMethodsForEmail( this.afAuth, email );
      console.log("fetchSignMethodEmail", email, fetchSignMethodEmail)
    if(fetchSignMethodEmail?.length > 0){// USER PHONE@EMAIL.com EXIST 
      //WORK NEEDED
      if( fetchSignMethodEmail.includes("password") ){
          return {"success":true, exist:true}
      }else{// CHECK IF SIGN IN INCLUDES PHONE
        return {"success":false,info:"401"}
      }
    }else{// NO SUCH USER > SIGN UP GO STEP 1
        return {"success":true, exist:false}
    }
  }


  createUser(phone:string){
    const appVerifier = this.windowRef.recaptchaVerifier;
    if(!appVerifier){
      return {"success":false,info:"recaptcha did not process properly."}
    }else{
      // console.log(appVerifier)
      return signInWithPhoneNumber(this.afAuth, phone, appVerifier)
        .then( confirmationResult => {
          this.confirmationResult = confirmationResult;
          this.verificationId = confirmationResult.verificationId;
          return {"success":true, info:""}
      }).catch((error) => {
        // console.log("SMS not sent", error);
        return {"success":false,info:error}
      });
    }
  }

  async setUpAccount(
    credential:any,
    name:string, password:string,
    completePhone:string, 
    email:string,
    iso:string, coin:string
    ){
      console.log(
        credential,
        name, password,
        completePhone, iso, coin
      )
      const emailCompany = completePhone + "@" + "islesys.com";
      const display = "";
      // CREATE USER DOC TO FIRESTORE
      let dX = Date.now()
      let factorPass = dX + password + dX;
     const storeData = await this.updateUserData("phone", credential.user, completePhone, name, iso, coin, email, false, factorPass ).then(() => {
     if(credential.user){
      return this.addEmallPass( emailCompany, password, name, display).then(rS => {
        if(!rS.success){
          return { success:false, info:"issue: Setup User Failed " + rS.code } 
        }else{
          return { success:true, complete:true, info:rS.code,  }
        }
       }).catch(err =>{ 
        return { success:false, complete:false, info:"issue: " + err } 
      });;
     }else{
       return { success:false, complete:false, info:"issue: invalid credentials"  }
     }
        }).catch(err =>{ 
          return { success:false, complete:false, info:"issue: " + err } 
        });
    return storeData;
  }


  async addEmallPass(
    email:string, password:string, 
    displayName:string, photoURL:string){
    const currentUser:any = await this.afAuth.currentUser;

    return updateEmail(currentUser, email).then(resEmail => {
      return updatePassword(currentUser, password).then(resPass => {
        return updateProfile(currentUser, {displayName:displayName, photoURL:photoURL}).then(resName => {
          return {success:true, code:currentUser.uid };
        }).catch(err => {
          return {success:false, code:3, err};
        });
      }).catch(err => {
        return {success:false, code:2, err};
      })
    }).catch(err => {
      return {success:false, code:1, err};
    })
  }

  private updateUserData(medium:string, user:any, 
    phone:string, name:string, iso:string, coin:string, 
    email:string, emailV:boolean,
    factorPass:string
    ) {
      const userRef = doc(this.firestore, `${'users'}/${user.uid}`);
      let newTimestamp = this.getServerTimestamp();
      let status ="Hey there! I'm using " + "."

      const data:UserModel = {
        uid: user.uid, 
        name: name, display:"", 
        phone: phone, iso: iso, coin: coin,
        email: email, emailV:emailV, emails:[],
        key: factorPass,

        time_sin: newTimestamp,  time_upd: newTimestamp,  time_log: newTimestamp,
        state:false
      }
      data.emails.push(email)
      return setDoc(userRef, data, { merge: true })
    }

    completeUserData(userID:string) {
      const userRef = doc(this.firestore, `${'users'}/${userID}`);
      let newTimestamp = this.getServerTimestamp();
      let status ="Hey there! I'm using " + "."

      const data = {
        time_upd: newTimestamp,
        state:true
      }
      return updateDoc(userRef, data)
    }

    async signOut() {
      await this.afAuth.signOut();
      this.router.navigate(['/explore']);
    }

    async signInWithPassword(completePhone:string, password:string){
      this.makingChanges = true;
      const email = completePhone + "@" + "islesys.com";
      console.log("signInWithPassword", email, password)
      // LOG IN WITH PASSWORD
      const credential = await signInWithEmailAndPassword(this.afAuth, email,password).then(data=>{
        // CHECK IF PHONE VARIFIED
        if( !data || !data.user || !data.user?.phoneNumber ){
          return {"success":true, complete:false, info:"", phone:completePhone }
        }else{
          return {"success":true, complete:true, info:"" }
        }
      }).catch(err =>{
        console.log("ABBE", err)
        return {"success":false, complete:false, info:"issue: " + err.message, code:err.code}
      });
      return credential;
    }

}
