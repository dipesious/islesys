import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, setDoc, doc, addDoc, limitToLast, orderBy, query, where, limit, updateDoc, docData, Timestamp, serverTimestamp } from '@angular/fire/firestore';

import { Observable, of, switchMap } from 'rxjs';

import { Storage, ref, uploadString } from '@angular/fire/storage';
import { getDownloadURL, getBlob } from '@firebase/storage';
import { HttpClient } from '@angular/common/http';
import { Auth, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dbWALT = "walt";

  dbICONS = "icons";
  dbMAPS = "maps";
  dbFONTS = "fonts";
  dbTABLES = "tables";
  dbPALETTES = "palettes";
  dbPATTERNS = "patterns";
  dbGRADIENTS = "gradients";

  user$: Observable<any> = this.getLogUSER();
  allowLog = false;

  constructor(
    private httpClient: HttpClient,
    private fs: Firestore,
    public afAuth: Auth,
    private fireStorage: Storage,
    ) {}

  get getServerTimestamp(){ return serverTimestamp; }


  cloudUpload(idX:string, baseString:string){
    const imgID = idX + Date.now() + '.svg';
    const bannerRef = ref(this.fireStorage, "/islesysMaps/" + imgID);
  
    return uploadString(bannerRef, baseString).then((snapshot) => {
      console.log('snapshot', snapshot);
      return getDownloadURL(bannerRef).then(imgURL => {
        console.log("getDownloadURL", imgURL)
        return { success:true,  imgID, link:imgURL}
      })
    }).catch(err => {
      console.log('snapshot Fail', err);
      return { success:false,  mgID:"", link:""}
    });
  }

  cloudDownload(data:string){
    return this.httpClient.get(data, { responseType: 'text' as 'json' });
  }


  // AUTH SYSTEM
  private getLogUSER(){
    //this.allowLog = false;
    //return this.afAuth.authState.pipe(switchMap(user => {
    return authState(this.afAuth).pipe(switchMap(user => {
      if (!user) {
        this.allowLog = true;
        return of(null); 
      } else {
        if(!user.phoneNumber && !user.emailVerified){
          this.allowLog = true;
          return of(null); 
        }else{ console.log("USA")
          this.allowLog = true;
          //return of({id:user.uid}); 
          //return this.afs.doc<User>(`${this.resource.env.db.users}/${user.uid}`).valueChanges();
          // return this.afs.doc<User>(`${this.resource.env.db.users}/${user.uid}`).valueChanges();
          //return doc<User>(`${this.resource.env.db.users}/${user.uid}`).valueChanges();
          //return getDoc() (`${this.resource.env.db.users}/${user.uid}`);

          // const itemDoc = doc(this.firestore, `${this.resource.env.db.users}`, `${user.uid}`);
          // return docData(itemDoc);
          return this.getFirestoreDocument( "users", user.uid );
        }
      }
    }))
  }

  getFirestoreDocument(docX:string,idX:string){
    try{
      const itemDoc = doc(this.fs, `${docX}`, `${idX}`);
      return docData(itemDoc);
    }catch(err){
      console.log("err: ", err)
      return of()
    }
  }

  submitICON(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbICONS);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbICONS, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS})
    });
  }
  setDate(id:string){
    // const sTS = this.getServerTimestamp();
    const cityRef = doc(this.fs, this.dbICONS, id);
    // return updateDoc(cityRef, {id:id, sin:sTS})
    return updateDoc(cityRef, {doME:true})
  }

  submitMAP(data:any){
    const sendData = {
      id:data.id,
      type:data.type, about:data.about, info:data.info,
      by:data.by, contact:data.contact, dial_code:data.dial_code,
      name:data.name,  data:'', 
      active:data.active,
      sin: data.sin
    }
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbMAPS);
    return addDoc(cityRefC, sendData).then(async ref => {
      const cityRef = doc(this.fs, this.dbMAPS, ref.id);
      let id = ref.id;
      let banner = data.data;
      const cloudUpload = await this.cloudUpload(id, banner);
      if(!cloudUpload.success){
        // console.log(cloudUpload)
        return;
      }else{
        // console.log(cloudUpload)
        // this.pqr(cloudUpload.link)
      return updateDoc(cityRef, {id:ref.id, sin:sTS, data:cloudUpload.link})
      }
    });
  }

  submitFONT(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbFONTS);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbFONTS, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS})
    });
  }

  submitTABLE(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbTABLES);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbTABLES, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS})
    });
  }

  submitPALETTE(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbPALETTES);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbPALETTES, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS})
    });
  }

  submitPATTERN(data:any){
    const cityRefC = collection(this.fs, this.dbPATTERNS);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbPATTERNS, ref.id);
      return updateDoc(cityRef, {id:ref.id})
    });
  }

  submitGRADIENT(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbGRADIENTS);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbGRADIENTS, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS})
    });
  }




  // getAllICON(fill:string, tone:string){
  //   const cityRef = collection(this.fs, this.dbICONS);
  //   const qu = query(cityRef, 
  //     where("active", "==", true),
  //     where("fill", "==", fill),
  //     where("tone", "==", tone),
  //     orderBy("name"), 
  //     limit(100)
  //   );
  //   return collectionData(qu);
  // }

  // getAllMAP(){
  //   const cityRef = collection(this.fs, this.dbMAPS);
  //   const qu = query(cityRef, 
  //     where("active", "==", true),
  //     orderBy("info"), 
  //     limit(100)
  //   );
  //   return collectionData(qu);
  // }

  getAllFONT(){
    const cityRef = collection(this.fs, this.dbFONTS);
    const qu = query(cityRef, 
      where("active", "==", true),
      orderBy("name"), 
      limit(100)
    );
    return collectionData(qu);
  }

  getAllTABLE(){
    const cityRef = collection(this.fs, this.dbTABLES);
    const qu = query(cityRef, 
      where("active", "==", true),
      orderBy("name"), 
      limit(100)
    );
    return collectionData(qu);
  }

  // getAllPALETTE(){
  //   const cityRef = collection(this.fs, this.dbPALETTES);
  //   const qu = query(cityRef, 
  //     where("active", "==", true),
  //     orderBy("name"), 
  //     limit(50)
  //   );
  //   return collectionData(qu);
  // }

  // getAllPATTERN(){
  //   const cityRef = collection(this.fs, this.dbPATTERNS);
  //   const qu = query(cityRef, 
  //     where("active", "==", true),
  //     orderBy("name"), 
  //     limit(100)
  //   );
  //   return collectionData(qu);
  // }

  // getAllGRADIENT(){
  //   const cityRef = collection(this.fs, this.dbGRADIENTS);
  //   const qu = query(cityRef, 
  //     where("active", "==", true),
  //     orderBy("name"), 
  //     limit(100)
  //   );
  //   return collectionData(qu);
  // }




  getICON(id:string){
    const cityRef = doc(this.fs, this.dbICONS, id);
    return docData(cityRef);
  }

  getSIMILAR(id:string, name:string, s:number){
    const cityRef = collection(this.fs, this.dbICONS);
    const qu = query(cityRef, 
      where("active", "==", true),
      where("name", "==", name),
      // orderBy("name"), 
      limit(s)
    );
    return collectionData(qu);
  }

  getMAP(id:string){
    const cityRef = doc(this.fs, this.dbMAPS, id);
    return docData(cityRef);
  }




  submitWALT(data:any){
    const sTS = this.getServerTimestamp();
    const cityRefC = collection(this.fs, this.dbWALT);
    return addDoc(cityRefC, data).then(ref => {
      const cityRef = doc(this.fs, this.dbWALT, ref.id);
      return updateDoc(cityRef, {id:ref.id, sin:sTS}).then(() => {
        return {id: ref.id}
      })
    });
  }

  
  updateFieldWALT(id:string, fieldX:string, valueX:any){
    const userRef = doc(this.fs, `${this.dbWALT}/${id}`);
    return updateDoc(userRef, { [fieldX]:valueX })
  }

  getWALT(id:string){
    const cityRef = doc(this.fs, this.dbWALT, id);
    return docData(cityRef);
  }



  
}
