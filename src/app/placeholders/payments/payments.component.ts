import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  payment$:Observable<any> = of();

  constructor(
    public auth: AuthService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.execute();
  }

  execute(){
    const id = this.actRoute.snapshot.params['id'];
    console.log("id", id)
    if(id){
      this.payment$ = this.auth.getWALT(id) //.pipe(take(1));
    }
  }

}
