import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DependencyService } from 'src/app/services/dependency.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  activeBio:any = null;
  activeProfiles:any;
  myPayments:any;
  myPaymentsEnterprise:any;
  activePayment:any = null;
  loading = true;

  constructor(
    public depends: DependencyService,
    public resource: ResourceService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.execute()
  }

  execute(){
    this.auth.user$.pipe(take(1)).subscribe(mine => {
      if(!mine){

      }else{
        let uid = mine.uid;
        this.activeBio = mine;
        this.auth.getMySuccessWALT(uid).pipe(take(1)).subscribe(pay => {
          console.log(uid, pay)
          if(!pay || pay.length == 0){
            this.loading = false
          }else{
            this.activeProfiles = pay || [];
            this.myPayments = pay.filter((x:any) => x.pack == "community");
            this.myPaymentsEnterprise = pay.filter((x:any) => x.pack == "enterprise");
            let payX = this.myPayments[0];
            if(payX){
              this.activePayment = payX;
            }
            this.loading = false
          }
        })
      }
    })

  }


}
