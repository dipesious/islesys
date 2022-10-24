import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-bug',
  templateUrl: './file-bug.component.html',
  styleUrls: ['./file-bug.component.scss']
})
export class FileBugComponent implements OnInit {

  formX = {
    name:"",
    email:"",
    // phone:"",
    topic:"",
    describe:"",
  }

  makingChanges = false;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  checkName(name:string){
    const newKey  = new FormControl(name, [
      Validators.pattern('^[0-9A-Za-z ]+$')
    ]);
    return newKey.invalid;
  }
  
  checkEmail(email:string){
    const newMail  = new FormControl(email, [
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
    ]);
    return newMail.invalid;
  }
  
  // checkPhone(phone:string){
  //   const newNum  = new FormControl(phone, [
  //     Validators.pattern('^[0-9]+$')
  //   ]);
  //   return newNum.invalid;
  // }
  
  checkDescribe(describe:string){
    const newKey  = new FormControl(describe, [
      Validators.pattern('^[0-9A-Za-z ]+$')
    ]);
    return newKey.invalid;
  }
  
  submitForm(){
    this.makingChanges = true;
    if(
      !this.formX.name ||
      !this.formX.email ||
      // !this.formX.phone ||
      !this.formX.describe ||
      this.checkName(this.formX.name) ||
      this.checkEmail(this.formX.email) ||
      // this.checkPhone(this.formX.phone) ||
      this.checkDescribe(this.formX.describe) ||
      false
    ){
      this.makingChanges = false;
      let mess = ( 
        this.checkName(this.formX.name) ? "Proper name is Required!":(
          this.checkEmail(this.formX.email) ? "Proper email is Required!":(
            this.checkDescribe(this.formX.topic) ? "Proper subject is Required!":(
              this.checkDescribe(this.formX.describe) ? "Proper message is Required!":
              ("Fill all fields."))))
      )
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{
      this.postForm(
        this.formX.name,
        this.formX.email?.toLowerCase(),
        // this.formX.phone,
        this.formX.topic,
        this.formX.describe,
      ).pipe(take(1)).subscribe((ref:any) => {
        if(!ref || !ref.success){
  
        }else{
          this.formX.name = "";
          this.formX.email = "";
          // this.formX.phone = "";
          this.formX.topic = "";
          this.formX.describe = "";
        }
      })
    }
  
  }
  
  postForm(name:string, email:string, title:string, about:string){
    const data = {
      name, email, title, about
    }
    return this.httpClient.post(`${ environment.server }/api/native/contact/${'islesysDOTcom'}`, data);
  }

}
