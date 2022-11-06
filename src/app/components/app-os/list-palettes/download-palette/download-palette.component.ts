import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-download-palette',
  templateUrl: './download-palette.component.html',
  styleUrls: ['./download-palette.component.scss']
})
export class DownloadPaletteComponent implements OnInit, AfterViewInit {

  mySubscription;

  palette$: Observable<any> = of();
  sideToggle = false;

  constructor(
    public dialog: MatDialog,
    public auth:AuthService,
    public resource:ResourceService,
    private actRoute: ActivatedRoute,
    private router: Router, 
    private snackBar: MatSnackBar,
    public seo: SeoService,
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
    let xTitle = "Library of unique palettes";
    let xDescription = "We are building an extraordinary library of unique palettes. The palettes undertaking by Dipesh Bhoir with over 5k+ palettes at your fingertips.";
    let xURL = "https://islesys.com/palettes";
    let xImage = "";
    let xKeywords = "palettes, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  ngAfterViewInit(){
    const x = this.actRoute.snapshot.params;
    const id = x['id'];
    this.execute(id)
    console.log(id)
  }


  execute(id:string){
    this.palette$ = this.auth.getPalette(id).pipe(take(1))
  }


  getME(wat:string, name:string, id:string, color:string){
    if(!this.sideToggle){
      let mess = "You need to accept terms of service.";
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{
      
    let state = "" + 
    // (wat == 'CSS' ? 'CSS COLOR':'') + 
    // (wat == 'JPEG' ? 'JPEG COLOR':'') + 
    (wat == 'HEX' ? 'HEX COLOR':'');
    let title = "#" + color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: title, state: state,
        sector:"palette"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){
        let newData = `#${color}`;

        // if(wat == 'CSS'){ this.getCSS() }
        // if(wat == 'JPEG'){ this.getJPEG() }
        if(wat == 'HEX'){ this.resource.copyCLIPBOARD(newData) }

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

}
