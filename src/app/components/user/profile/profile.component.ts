import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() mine!: any;
  imgLoaded:string[] = [];

  constructor(
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

  signin(methodX:string){

    if(methodX == 'password'){

    }

    if(methodX == 'google'){
      let mess = "Google servers are down.";
      this.snackMe(mess);
    }
    if(methodX == 'twitter'){
      let mess = "Twitter servers are down.";
      this.snackMe(mess);
    }
    if(methodX == 'microsoft'){
      let mess = "Microsoft servers are down";
      this.snackMe(mess);
    }

  }
  
  snackMe(mess:string){
    this.snackBar.open(mess,"", {
      horizontalPosition: "center", verticalPosition: "bottom", 
      duration: 2000,
      panelClass:"c_white" })
  }

}
