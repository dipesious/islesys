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
  selector: 'app-download-font',
  templateUrl: './download-font.component.html',
  styleUrls: ['./download-font.component.scss']
})
export class DownloadFontComponent implements OnInit {

  mySubscription;

  font$: Observable<any> = of();
  sideToggle = false;

  fontSize = 1;
  demoMode = "Normal";

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
  }

  ngAfterViewInit(){
    const x = this.actRoute.snapshot.params;
    const id = x['id'];
    this.execute(id)
    console.log(id)
  }

  execute(id:string){
    this.font$ = this.auth.getFont(id).pipe(take(1))
    this.font$.pipe(take(1)).subscribe(ref => {
      if(ref){
        let name = ref.name;

    let xTitle = "Font - " + name + " download";
    let xDescription = "We are building an extensive library of writing systems. The fonts undertaking by Dipesh Bhoir with over 1200+ fonts at your fingertips.";
    let xURL = "https://islesys.com/opensource-font/" + ref.id;
    let xImage = "";
    let xKeywords = "fonts, free download, " + name + ", Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  
      }
    })
  }


  getME(wat:string, name:string, id:string, data:string, demoText:string, demoCSS:string){
    let state = "" + 
    (wat == 'ZIP' ? 'ZIP FILE':'') + 
    (wat == 'IMPORT' ? 'IMPORT URL':'') + 
    "";
    let title = "Font " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: title, state: state,
        sector:"font"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){

        if(wat == 'ZIP'){ this.getZIP() }
        if(wat == 'IMPORT'){ this.getIMPORT() }

      }
      if(wat == 'Community'){

      }
      if(wat == 'Enterprise'){

      }
    });
  }


  getZIP(){
    // COPY CSS TO CLIPBOARD
  }

  getIMPORT(){
    // DOWNLOAD JPEG
  }
  
  fontSizeSet(x:number){
    if(x < 0){
      this.fontSize = this.fontSize - 2;
    }else{
      this.fontSize = this.fontSize + 2;
    }
  }

  getLink(link:any){
    return `<style>
    ${link}
    </style>`
      }
    
      getClass(about:any){
    return `.islesys{
    font-family: ${about} }`
      }
    
      getFont(info:string){
        return this.resource.fontType[this.resource.fontType.findIndex(x => x.name == info)].demo;
      }

}
