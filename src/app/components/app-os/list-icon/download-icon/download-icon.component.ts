import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';

// import { AppAdvertComponent } from 'src/app/components/app-advert/app-advert.component';

@Component({
  selector: 'app-download-icon',
  templateUrl: './download-icon.component.html',
  styleUrls: ['./download-icon.component.scss']
})
export class DownloadIconComponent implements OnInit, AfterViewInit {

  mySubscription;

  bgInvert = false;
  bgColor = "";
  icon$: Observable<any> = of();
  sideToggle = false;
  similar$: Observable<any[]> = of();

  constructor(
    public dialog: MatDialog,
    public auth:AuthService,
    private actRoute: ActivatedRoute,
    private router: Router, 
    // private activatedRoute: ActivatedRoute
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
  // Trick the Router into believing it's last link wasn't previously loaded
      this.router.navigated = false;
      }
    });  

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const x = this.actRoute.snapshot.params;
    const id = x['id'];
    this.execute(id)
    console.log(id)
  }

  ngOnDestroy(){
    if (this.mySubscription) {
     this.mySubscription.unsubscribe();
    }
  }

  execute(id:string){
    this.icon$ = this.auth.getICON(id).pipe(take(1))
    let name = "Adhesive Bandage"
    this.similar$ = this.auth.getSIMILAR(id, name).pipe(take(1))
  }

  getME(wat:string, name:string, id:string){
    let state = "" + 
    (wat == 'COPY' ? 'COPY ICON':'') + 
    (wat == 'SVG' ? 'SVG ICON':'') + 
    (wat == 'PNG' ? 'PNG ICON':'') + 
    (wat == 'WEBP' ? 'WEBP ICON':'');

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title:name, state: state,
        sector:"icon"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){

        if(wat == 'SVG'){ this.getSVG() }
        if(wat == 'PNG'){ this.getPNG() }
        if(wat == 'WEBP'){ this.getWEBP() }

      }
      if(wat == 'Community'){

      }
      if(wat == 'Enterprise'){

      }
    });
  }

  getSVG(){

  }

  getPNG(){

  }

  getWEBP(){

  }

}
