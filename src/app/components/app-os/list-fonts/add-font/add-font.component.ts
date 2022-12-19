import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { FontModel } from 'src/app/universal.model';

@Component({
  selector: 'app-add-font',
  templateUrl: './add-font.component.html',
  styleUrls: ['./add-font.component.scss']
})
export class AddFontComponent implements OnInit {


  font:FontModel = {
    id:"",
    type:undefined, 
    about:'', info:'', 
    link:'',
    demoText:'', 
    // demoCSS:'',
    by:'', dial_code:'+91', contact:'',
    name:'', data:'', 
    active:false,
    sin:null
  }
  // font:FontModel = {
  //   id:"",
  //   type:this.resource.fontType[17].code, 
  //   about:`'Rubik Marker Hatch', cursive;`, info:'Latin', 
  //   link:`@import url('https://fonts.googleapis.com/css2?family=Rubik+Marker+Hatch&display=swap');`,
  //   demoText:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quo magni assumenda nisi. Molestiae sapiente, perferendis tempore mollitia atque officiis libero dolorem, unde iure dignissimos, dolores officia magni natus repudiandae.', 
  //   demoCSS:`<style>
  //   @import url('https://fonts.googleapis.com/css2?family=Rubik+Marker+Hatch&display=swap');
  //   </style>`,
  //   by:'Dipesh Bhoir', dial_code:'+91', contact:'9892381514',
  //   name:'Rubik Marker Hatch', data:"",
  //   active:true,
  //   sin:null
  // }
  makingChanges = false;
  
  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddFontComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(!this.font.type || !this.font.name || !this.font.link || !this.font.demoText  //|| !this.font.demoCSS 
      || !this.font.by || !this.font.contact ){
      this.makingChanges = false;
    }else{
      const x = this.resource.fontType[this.resource.fontType.findIndex(i => i.code == this.font.type)];
      //this.table.about = x.name;
      this.font.info = x.name;
// this.font.demoCSS = `<style>
// ${this.font.link}
// </style>`;

      console.log(this.font)
      this.auth.submitFONT(this.font).then(() => {
        this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
      })
    }
  }

}
