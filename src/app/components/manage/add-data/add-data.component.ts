import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

interface TableModel {
  id:string,
  type:number|undefined, 
  about:string, info:string, 

  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean
};

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  tableType = [
    {name:"English", info:"EN", code:2},
    {name:"Marathi", info:"MA", code:1},
  ]

  table:TableModel = {
    id:"",
    type:undefined, 
    about:'', info:'',
    by:'', dial_code:'+91', contact:'',
    name:'', data:'', 
    active:false
  }
  makingChanges = false;
  
  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddDataComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(!this.table.type || !this.table.name || !this.table.data || !this.table.by || !this.table.contact ){
      this.makingChanges = false;
    }else{
      const x = this.tableType[this.tableType.findIndex(i => i.code == this.table.type)];
      //this.table.about = x.name;
      this.table.info = x.info;

      console.log(this.table)
      this.auth.submitTABLE(this.table).then(() => {
        this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
      })
    }
  }

}
