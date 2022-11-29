import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';

// import { AppAdvertComponent } from 'src/app/components/app-advert/app-advert.component';

@Component({
  selector: 'app-download-icon',
  templateUrl: './download-icon.component.html',
  styleUrls: ['./download-icon.component.scss']
})
export class DownloadIconComponent implements OnInit, AfterViewInit, OnDestroy {

  mySubscription;

  icon$: Observable<any> = of();
  sideToggle = false;
  similar$: Observable<any[]> = of();

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

  ngOnInit(): void {}

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
    this.icon$.pipe(take(1)).subscribe(ref => {
      if(ref){
        let name = ref.name;//"Adhesive Bandage"

    let xTitle = "Download icon for " + name;
    let xDescription = "We are building a gargantuan library of compatible icons. The icons undertaking by Dipesh Bhoir with over 50k+ icons at your fingertips.";
    let xURL = "https://islesys.com/free-icon/" + ref.id;
    let xImage = "";
    let xKeywords = "icons, free download, " + name + ", icon who, Dipesh Bhoir";

        this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
        this.similar$ = this.auth.getSIMILAR(id, name, 25).pipe(take(1))
      }
    })
  }

  getME(wat:string, name:string, id:string, data:any){
    if(!this.sideToggle){
      let mess = "You need to accept terms of service.";
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{

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

      if(result?.type == "Private"){
        let newData = `<svg fill="${ '' +
        ( !this.resource.fgColor && this.resource.bgInvert ? '#ffffff' : '' ) +
        ( !this.resource.fgColor && !this.resource.bgInvert ? '#000000' : '' ) +

        ( this.resource.fgColor == 'red' ? '#f44336' : '' ) +
        ( this.resource.fgColor == 'orange' ? '#ff9800' : '' ) +
        ( this.resource.fgColor == 'yellow' ? '#ffeb3b' : '' ) +
        ( this.resource.fgColor == 'green' ? '#4caf50' : '' ) +
        ( this.resource.fgColor == 'blue' ? '#3f51b5' : '' ) +
        ( this.resource.fgColor == 'indigo' ? '#9c27b0' : '' ) +
        ( this.resource.fgColor == 'violet' ? '#ee82ee' : '' ) +

        '' }" ${ data.split("<svg")[1] }`;
        // console.log(newData);

        if(wat == 'SVG'){ this.getSVG(id, name, newData) }
        if(wat == 'PNG'){ this.getPNG(id, name, newData) }
        if(wat == 'WEBP'){ this.getWEBP(id, name, newData) }

        if(wat == 'COPY'){ this.resource.copyCLIPBOARD(data) }
      }

      if(result?.type == 'Community'){
        this.router.navigate(['/cart/upgrade-account']);
      }
      if(result?.type == 'Institution'){
        this.router.navigate(['/cart/apply-for-institution']);
      }
      if(result?.type == 'getHelp'){
        this.router.navigate(['/getHelp/icons']);
      }
    });

    }

  }

  getSVG(id:string, title:string, dataSVG:string){
var svgBlob = new Blob([dataSVG], {type:"image/svg+xml;charset=utf-8"});
var svgUrl = URL.createObjectURL(svgBlob);
var downloadLink = document.createElement("a");
downloadLink.href = svgUrl;
downloadLink.download = id + "_" + title + ".svg";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
  }

  getPNG(id:string, title:string, dataSVG:any){
  const svg = dataSVG;

  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  const svgImage = document.createElement('img');
  document.body.appendChild(svgImage);
  svgImage.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = svgImage.clientWidth;
    canvas.height = svgImage.clientHeight;
    const canvasCtx:any = canvas.getContext('2d');
    canvasCtx.drawImage(svgImage, 0, 0);
    const imgData = canvas.toDataURL('image/png');
    // console.log(imgData)
    // return imgData;
    // callback(imgData);


    var downloadLink = document.createElement("a");
    downloadLink.href = imgData;
    downloadLink.download = id + "_" + title + ".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);



    document.body.removeChild(svgImage);
  };
  svgImage.src = url;
  }

  getWEBP(id:string, title:string, dataSVG:any){
    const svg = dataSVG;
  
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const svgImage = document.createElement('img');
    document.body.appendChild(svgImage);
    svgImage.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = svgImage.clientWidth;
      canvas.height = svgImage.clientHeight;
      const canvasCtx:any = canvas.getContext('2d');
      canvasCtx.drawImage(svgImage, 0, 0);
      const imgData = canvas.toDataURL('image/webp');
      // console.log(imgData)
      // return imgData;
      // callback(imgData);
  
  
      var downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = id + "_" + title + ".webp";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  
  
  
      document.body.removeChild(svgImage);
    };
    svgImage.src = url;
  }


}

