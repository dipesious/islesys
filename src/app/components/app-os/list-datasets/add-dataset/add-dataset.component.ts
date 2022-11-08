import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { DatasetModel } from 'src/app/universal.model';

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.scss']
})
export class AddDatasetComponent implements OnInit {


  table:DatasetModel = {
    id:"",
    type:undefined, 
    about:'', info:'',
    by:'', dial_code:'+91', contact:'',
    name:'', data:'', 
    active:false,
    sin:null
  }
  // table:DatasetModel = {
  //   id:"",
  //   type: this.resource.tableType[0].code, //undefined, 
  //   about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum, earum minima est cupiditate fugit harum ratione excepturi, nemo veniam quidem maxime architecto nobis deserunt perferendis ipsam consequuntur odio! Maiores!', info:'',
  //   by:'Dipesh Bhoir', dial_code:'+91', contact:'9892381514',
  //   name:'', data:'', 
  //   active:true,
  //   sin:null
  // }
  makingChanges = false;
  
  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddDatasetComponent>
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.makingChanges = true;
    if(!this.table.type || !this.table.name || !this.table.data || !this.table.by || !this.table.contact ){
      this.makingChanges = false;
    }else{
      const x = this.resource.tableType[this.resource.tableType.findIndex(i => i.code == this.table.type)];
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
