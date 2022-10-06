import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

interface PatternModel {
  id:string,
  type:number|undefined, demoCSS:string; about:string, info:string, 

  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean
};

@Component({
  selector: 'app-add-pattern',
  templateUrl: './add-pattern.component.html',
  styleUrls: ['./add-pattern.component.scss']
})
export class AddPatternComponent implements OnInit {


  // pattern:PatternModel = {
  //   id:"",
  //   type:this.resource.patternType[4].code, demoCSS:"", about:'', info:'',
  //   by:'Dipesh Bhoir', dial_code:'+91', contact:'9892381514',
  //   name:'', data:'', 
  //   active:true
  // }
  pattern:PatternModel = {
    id:"",
    type:undefined, demoCSS:"", about:'', info:'',
    by:'', dial_code:'+91', contact:'',
    name:'', data:'', 
    active:false
  }
  makingChanges = false;
  
  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddPatternComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if( !this.pattern.type || !this.pattern.name || !this.pattern.data  || !this.pattern.demoCSS || !this.pattern.by || !this.pattern.contact ){
      this.makingChanges = false;
    }else{
      const x = this.resource.patternType[this.resource.patternType.findIndex(i => i.code == this.pattern.type)];
      this.pattern.about = x.name;
      this.pattern.info = x.color;

      console.log(this.pattern)
      this.auth.submitPATTERN(this.pattern).then(() => {
        this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
      })
    }
  }

}
