import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { mapModel } from 'src/app/universal.model';


@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.scss']
})
export class AddMapComponent implements OnInit {

  placeholderIcon = `><path d="M0 0h24v24h-24z"/>`
  
  map:mapModel = {
    id:"",
    type:undefined, about:'', info:'',
    by:'', contact:'', dial_code:'+91',
    name:'',  data:'', 
    active:false,
    sin: null
  }
  // map:mapModel = {
  //   id:"",
  //   type: this.resource.mapList[6].code || undefined, about:'', info:'',
  //   by:'Dipesh Bhoir', contact:'9892381514', dial_code:'+91',
  //   name:'IN ',  data:'', 
  //   active:true,
  //   sin: null
  // }
  makingChanges = false;
  
    constructor(
      public resource: ResourceService,
      public auth: AuthService,
      private dialogRef: MatDialogRef<AddMapComponent>
    ) { }
  
    ngOnInit(): void {
    }
  
    // get getDemo(){
    //   return `<svg viewBox="0 0 24 24">${this.placeholderIcon}</svg>`
    // }
  
    submit(){
      this.makingChanges = true;
      if(!this.map.type || !this.map.name || !this.map.data || !this.map.by || !this.map.contact ){
        this.makingChanges = false;
      }else{
        const x = this.resource.mapList[this.resource.mapList.findIndex(i => i.code == this.map.type)];
        this.map.about = x.name;
        this.map.info = x.info;
  
        console.log(this.map)
        this.auth.submitMAP(this.map).then(() => {
          this.dialogRef.close()
        }).catch(() => {
          this.makingChanges = false;
        })
      }
    }
  
    // async abc(){
    //   let id = "id";
    //   let banner = ``;
    //   const cloudUpload = await this.auth.cloudUpload(id, banner);
    //   if(!cloudUpload.success){
    //     console.log(cloudUpload)
    //   }else{
    //     console.log(cloudUpload)
    //     this.pqr(cloudUpload.link)
    //   }
    // }

    // async pqr(link:string){
    //   const cloud = await this.auth.cloudDownload(link);
    //   cloud
    //   .subscribe((text:any) => console.log(text))
    // }

  }
