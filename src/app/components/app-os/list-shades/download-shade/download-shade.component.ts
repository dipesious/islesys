import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-download-shade',
  templateUrl: './download-shade.component.html',
  styleUrls: ['./download-shade.component.scss']
})
export class DownloadShadeComponent implements OnInit {

  mySubscription;

  c:any = null;
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
    const x = this.actRoute.snapshot.params;
    const id = x['id'];
    this.execute(id)
    console.log(id)
  }

  ngAfterViewInit(){
  }


  execute(id:string){
    // this.c$ = this.auth.getGradient(id).pipe(take(1))
    let x = this.resource.colorz.findIndex(x => x.id == id);
    if(x !== -1){
      let y = this.resource.colorz[x]
      if(y){
        this.c = y;

        let xTitle = "Shades of " + y.name + " with Hex codes";
        let xDescription = "We are building a researched library of stable colors. The shades undertaking by Dipesh Bhoir with over 50k+ shades at your fingertips.";
        let xURL = "https://islesys.com/shades-of-color/" + y.id;
        let xImage = "";
        let xKeywords = "shades, free download, " + y.name + ", Islesys, Dipesh Bhoir";
        this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
      }else{
        // this.colorz$ = of();
      }
      
    }
  }



  getME(wat:string, name:string, color:string){
    let state = "" + 
    (wat == 'CSS' ? 'CSS COLOR':'') + 
    (wat == 'JPEG' ? 'JPEG COLOR':'') + 
    (wat == 'HEX' ? 'HEX COLOR':'');
    let title =  color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        // id,
        title: title, state: state,
        sector:"color"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){
        let newData = `${color}`;

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
        this.router.navigate(['/getHelp/shades']);
      }
    });
  }





}
