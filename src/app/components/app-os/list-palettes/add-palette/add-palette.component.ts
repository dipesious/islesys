import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { PaletteModel } from 'src/app/universal.model';


@Component({
  selector: 'app-add-palette',
  templateUrl: './add-palette.component.html',
  styleUrls: ['./add-palette.component.scss']
})
export class AddPaletteComponent implements OnInit {

  palette:PaletteModel = {
    id:"",
    type:"", 
    //type:undefined, 
    //about:"", info:"",
    c1:'', c2:'', c3:'', c4:'',
    by:'', dial_code:'+91', contact:'',
    name:'', //data:'None', 
    active:false,
    sin:null
  }
  makingChanges = false;


  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddPaletteComponent>
  ) {}

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(!this.palette.type || 
      !this.palette.name || 
      this.palette.c1.length !== 6 || this.palette.c2.length !== 6 || this.palette.c3.length !== 6 || this.palette.c4.length !== 6 || 
      !this.palette.by || !this.palette.contact ){
      this.makingChanges = false;
    }else{
      const x = this.resource.palatteList[this.resource.palatteList.findIndex(i => i == this.palette.type)];
      // const x = this.paletteType[this.paletteType.findIndex(i => i == this.palette.type)];
      // this.palette.about = x.name;
      // this.palette.info = x.info;

      console.log(this.palette)
      this.auth.submitPALETTE(this.palette).then(() => { this.dialogRef.close()
      }).catch(() => { this.makingChanges = false;
      })
    }
  }


}
