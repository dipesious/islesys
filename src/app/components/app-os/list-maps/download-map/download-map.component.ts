import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-download-map',
  templateUrl: './download-map.component.html',
  styleUrls: ['./download-map.component.scss']
})
export class DownloadMapComponent implements OnInit {
  @ViewChild('me') me!: any;
  // @ViewChild('mapX') mapX!: HTMLElement;

  // @HostListener('click') onMapComponentClicked(event: MouseEvent) {    
  //   //const clickedElement = this.getClickedSvg(event)
  //   //if(!clickedElement) return
  //   // Do something with the clicked SVG; maybe read it's ID
  //   console.log(event)
  // }

  map$: Observable<any> = of();
  sideToggle = false;

  addArea = false;
  addBorders = true;
  addBackground = false;
  //addCord = false;

  regionClass = "";
  regionName = "";
  regionColor = "#f44336";
  regions = [
    {color:"#f44336", name:"Region 1"},
  ];

  // locateName = "";
  // locateColor = "#f44336";
  // locates = [
  //   {icon:"circle", name:"Mumbai"},
  //   {icon:"square", name:"Thane"},
  // ];

  // cordName = "";
  // cordShape = "square";
  // cordLat:number|undefined = undefined;
  // cordLon:number|undefined = undefined;

  colorz = [
    {color: "#f44336"},
    {color: "#e91e63"},
    {color: "#9c27b0"},
    {color: "#673ab7"},
    {color: "#3f51b5"},
    {color: "#2196f3"},
    {color: "#03a9f4"},
    {color: "#00bcd4"},
    {color: "#009688"},
    {color: "#4caf50"},
    {color: "#8bc34a"},
    {color: "#cddc39"},
    {color: "#ffeb3b"},
    {color: "#ffc107"},
    {color: "#ff9800"},
    {color: "#ff5722"},
    {color: "#795548"},
    {color: "#9e9e9e"},
    {color: "#607d8b"},
    {color: "#ffffff"},
    {color: "#000000"},
  ];

  svgMap = "";

  mySubscription;

  constructor(
    public auth:AuthService,
    public dialog: MatDialog,
    public resource: ResourceService,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
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
    this.resource.scaleMapX = 1;
    this.resource.moveMapLR = 0;
    this.resource.moveMapUD = 0;
  }

  execute(id:string){
    this.regionClass = "islesys_state";
    this.map$ = this.auth.getMAP(id).pipe(take(1))
    this.map$.pipe(take(1)).subscribe(ref => {
      let name = ref.name;

      let xTitle = name + " download svg, jpeg, png, webp";
      let xDescription = "We are building a diverse library of interactive maps. The maps undertaking by Dipesh Bhoir with over 1k+ maps at your fingertips.";
      let xURL = "https://islesys.com/edit-map/" + ref.id;
      let xImage = "";
      let xKeywords = "maps, free download, " + name + ", Islesys, Dipesh Bhoir";

      this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
      this.auth.cloudDownload(ref.data).pipe(take(1)).subscribe((text:any) => this.svgMap = text);
    })
  }


  addRegion(name:string, color:string){
    if(color && name){
      this.regions.push({color,name})
    }
    this.addArea = false;
  }

  // addLocates(lat:number, lon:number, icon:string, name:string){
  //   if(lat && lon && icon && name){
  //     this.locates.push({icon,name})
  //   }
  //   this.addCord = false;
  // }

  goWith(event:MouseEvent){
    const m:any = this.me.nativeElement.children[0].children;
    const x:any = Array.from(m).find((el:any) => el.contains(event.target));
    //console.log(m[0], event.target)
  


if(x){
    const y = x.getAttribute("fill")

  // let l = "islesys_label";

  //   if( x.classList[0] == l ){

  //   }

    if( x.classList[0] == this.regionClass ){
      const lX = x.classList[1]?.split('state_')[1];
      const label = "islesys_label_" + lX;


      if(y == this.regionColor){
        x.setAttribute("fill", "#88a4bc")
        x.setAttribute("stroke", (!this.addBorders ? "#88a4bc":"#ffffff"))
    
        if(lX && label){
          const r = Array.from(m);
          const q:any = r.findIndex((el:any) => el.classList[1] == label );
          if(q){
          const z:any = r[q-1];
          if(z && z.children.length == 0){
            z.setAttribute('fill', "#88a4bc")
          }
          }
        }

      }else{
        x.setAttribute("fill", this.regionColor)
        x.setAttribute("stroke", (!this.addBorders ? this.regionColor:"#ffffff"))
        // add
        const v = this.regions.findIndex(c => c.color == this.regionColor)
        if(v == -1){
         this.regions.push({color:this.regionColor, name:("Region " + (this.regions.length+1)) },); 
        }

        if(lX && label){
          const r = Array.from(m);
          const q:any = r.findIndex((el:any) => el.classList[1] == label ); 
          if(q){
            const z:any = r[q-1];
            //&& z.split(' ')[0] == '<rect'
            if(z && z.children.length == 0){
            z.setAttribute('fill', this.regionColor)
            }
          }
        }

      }
    }

}    

  }

  removeFill(color:string){
    this.regions.splice(this.regions.findIndex(c => c.color == color), 1);
    const m:any = this.me.nativeElement.children[0].children;
    const x:any = Array.from(m)
    for (let i = 0; i < x.length; i++) {
      const element = x[i];
      if( element.classList[0] == this.regionClass && element.getAttribute("fill") ){
        //console.log(1, element.getAttribute("fill"), color)
        if(element.getAttribute("fill") == color){
        //console.log(element)
        element.setAttribute("fill", "#88a4bc")
        element.setAttribute("stroke", (!this.addBorders ? "#88a4bc":"#ffffff"))
        }
      }
    }
  }

  flipBorders(flip:boolean){
    const m:any = this.me.nativeElement.children[0].children;
    const x:any = Array.from(m)
    for (let i = 0; i < x.length; i++) {
      const element = x[i];
      if( element.classList[0] == this.regionClass && element.getAttribute("stroke") ){
        if(!flip){
          element.setAttribute("stroke-width", "3.7837499999999995")
          //element.setAttribute("stroke-opacity", "1")
          element.setAttribute("stroke", "#ffffff")
        }else{
          const f = element.getAttribute("fill")

          element.setAttribute("stroke-width", "1")
          //element.setAttribute("stroke-opacity", "0")
          element.setAttribute("stroke", f)
        }
      }
      // if( element.classList[0] == this.regionClass && element.getAttribute("fill") ){
      //   //console.log(1, element.getAttribute("fill"), color)
      //   if(element.getAttribute("fill") == color){
      //   //console.log(element)
      //   element.setAttribute("fill", "#88a4bc")
      //   }
      // }
    }
  }

  // flipBackground(flip:boolean){
  //   // const m:any = this.me.nativeElement[0].children
  //   // m.setAttribute("style", "background:#ff0000;")
  //   // console.log(m)
  // }


  getME(wat:string, name:string, id:string){
    if(!this.sideToggle){
      let mess = "You need to accept terms of service.";
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{
      
    let state = "" + 
    (wat == 'SVG' ? 'SVG ICON':'') + 
    (wat == 'JPEG' ? 'PNG ICON':'') + 
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
        let newData = this.me.nativeElement.innerHTML;
        // console.log(newData)

        if(wat == 'SVG'){ this.getSVG(id, name, newData) }
        if(wat == 'JPEG'){ this.getJPEG(id, name, newData) }
        if(wat == 'PNG'){ this.getPNG(id, name, newData) }
        if(wat == 'WEBP'){ this.getWEBP(id, name, newData) }

      }
      if(wat == 'Community'){
        this.router.navigate(['/cart/upgrade-account']);
      }
      if(wat == 'Institution'){
        this.router.navigate(['/cart/apply-for-institution']);
      }
      if(result?.type == 'getHelp'){
        this.router.navigate(['/getHelp/maps']);
      }
    });

    }

  }

  getSVG(id:string, title:string, dataSVG:any){
var svgBlob = new Blob([dataSVG], {type:"image/svg+xml;charset=utf-8"});
var svgUrl = URL.createObjectURL(svgBlob);
var downloadLink = document.createElement("a");
downloadLink.href = svgUrl;
downloadLink.download = id + "_" + title + ".svg";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
  }

  getJPEG(id:string, title:string, dataSVG:any){
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
    const imgData = canvas.toDataURL('image/jpeg');
    // console.log(imgData)
    // return imgData;
    // callback(imgData);


    var downloadLink = document.createElement("a");
    downloadLink.href = imgData;
    downloadLink.download = id + "_" + title + ".jpeg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);



    document.body.removeChild(svgImage);
  };
  svgImage.src = url;
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
