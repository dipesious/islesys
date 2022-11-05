import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { SignitureService } from 'src/app/services/signiture.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, AfterContentInit {

  @Input() activeBio!: any;

  userSign = {
    name:"",
    phone:"",
    email:"",
    //pass:"",

    acceptWEB:true,
    acceptSMS:true,
    acceptEMAIL:true,

    acceptD:false,
    acceptT:false,

    makingChanges: false,
  }
  chosenNation = this.resource.nations[25];

  more = false;

  constructor(
    public sign: SignitureService,
    public resource: ResourceService,
    ) { }

  ngOnInit(): void {
  }

   ngAfterContentInit(): void {
    this.execute();
  }

  execute(){
    // if(this.activeBio){
    //   this.userSign.name = this.activeBio.name;
    //   this.userSign.phone = this.activeBio.phone;
    //   this.userSign.email = this.activeBio.email;
    // }
  }

  getPhone(iso:string, phone:string){
    let v = this.resource.nations.findIndex(x => x.iso == iso);
    this.chosenNation = this.resource.nations[v];
    return phone.split( this.chosenNation.cc )[1]
  }
}
