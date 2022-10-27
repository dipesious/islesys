import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-download-gradient',
  templateUrl: './download-gradient.component.html',
  styleUrls: ['./download-gradient.component.scss']
})
export class DownloadGradientComponent implements OnInit {

  mySubscription;

  gradient$: Observable<any> = of();
  sideToggle = false;

  constructor(
    public dialog: MatDialog,
    public auth:AuthService,
    public resource:ResourceService,
    private actRoute: ActivatedRoute,
    private router: Router, 
    private snackBar: MatSnackBar,
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


  execute(id:string){
    this.gradient$ = this.auth.getGradient(id).pipe(take(1))
  }


  getME(wat:string, name:string, id:string, cssData:string){
    if(!this.sideToggle){
      let mess = "You need to accept terms of service.";
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{

    let state = "" + 
    (wat == 'CSS' ? 'CSS GRADIENT':'') + 
    (wat == 'JPEG' ? 'JPEG GRADIENT':'') + 
    "";
    // let title = "#" + color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: name, state: state,
        sector:"gradient"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){

        if(wat == 'CSS'){ this.getCSS(cssData) }
        if(wat == 'JPEG'){ this.getJPEG() }

      }

      if(result?.type == 'Community'){
        this.router.navigate(['/cart/upgrade-account']);
      }
      if(result?.type == 'Enterprise'){
        this.router.navigate(['/cart/apply-for-enterprise']);
      }
      if(result?.type == 'getHelp'){
        this.router.navigate(['/getHelp/icons']);
      }
    });

    }
  }

  getCSS(cssData:string){
    // COPY CSS TO CLIPBOARD
    this.resource.copyCLIPBOARD(cssData)
  }

  getJPEG(){
    // DOWNLOAD JPEG
  }


  expandME(id:string){
    this.router.navigate([ '/view-gradient/' + id ])
  }

}
