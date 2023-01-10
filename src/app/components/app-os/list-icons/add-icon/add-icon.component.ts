import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { IconModel } from 'src/app/universal.model';


@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddIconComponent implements OnInit {

placeholderIcon = `><path d="M0 0h24v24h-24z"/>`
iconType = [
  {name:"Outline & Flat", fill:"Outline", tone:"Flat", code:1},
  {name:"Filled & Flat", fill:"Filled", tone:"Flat", code:2},

  // {name:"Outline & Duotone", fill:"Outline", tone:"Duotone", code:3},
  {name:"Filled & Duotone", fill:"Filled", tone:"Duotone", code:4},
  {name:"Animated & Duotone", fill:"Animated", tone:"Duotone", code:7},

  // {name:"Outline & Vibrant", fill:"Outline", tone:"Vibrant", code:5},
  {name:"Filled & Vibrant", fill:"Filled", tone:"Vibrant", code:6},
  {name:"Insignia & Vibrant", fill:"Insignia", tone:"Vibrant", code:8},
]

// icon:IconModel = {
//   id:"",
//   type:undefined, 
//   tone:'', fill:'', cat:'',
//   by:'', dial_code:'+91', contact:'',
//   name:'', data:'', 
//   active:false,
//   sin:null
// }
icon:IconModel = {
  id:"",
  type: this.iconType[5].code, //undefined, 
  tone:'', fill:'', cat:'Flags',
  by:'Dipesh Bhoir', dial_code:'+91', contact:'9892381514',
  name:'Name', data:'', 
  active:true,
  sin:null
}

makingChanges = false;


  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddIconComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(!this.icon.type || !this.icon.cat || !this.icon.name || !this.icon.data || !this.icon.by || !this.icon.contact ){
      this.makingChanges = false;
    }else{
      const x = this.iconType[this.iconType.findIndex(i => i.code == this.icon.type)];
      this.icon.tone = x.tone;
      this.icon.fill = x.fill;

      console.log(this.icon)
      this.auth.submitICON(this.icon).then(() => {
        this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
      })
    }
  }

}
