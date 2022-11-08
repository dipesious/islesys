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
  selector: 'app-download-data',
  templateUrl: './download-data.component.html',
  styleUrls: ['./download-data.component.scss']
})
export class DownloadDataComponent implements OnInit {

  dataset$: Observable<any> = of();
  sideToggle = false;

  mySubscription;

  constructor(
    public resource: ResourceService,
    public auth:AuthService,
    public dialog: MatDialog,
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
  }

  execute(id:string){
    this.dataset$ = this.auth.getDataset(id).pipe(take(1))
    this.dataset$.pipe(take(1)).subscribe(ref => {
      if(ref){
        let name = ref.name;

    let xTitle = "Download datasets for " + name;
    let xDescription = "We are building a massive library of formatted datasets. The datasets undertaking by Dipesh Bhoir with over 50k+ datasets at your fingertips.";
    let xURL = "https://islesys.com/each-dataset/" + ref.id;
    let xImage = "";
    let xKeywords = "datasets, free download, " + name + ", Islesys, Dipesh Bhoir";

        this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
      }
    })
  }

  arangeData(data:any){
    if(!data){
      return [];
    }else{
let x = data.split('},').join(`},
`)
return `[
${x}]`;
    }
  }

  getME(wat:string, name:string, id:string, data:string){
    if(!this.sideToggle){
      let mess = "You need to accept terms of service.";
      this.snackBar.open(mess, "", {
        horizontalPosition: "center", verticalPosition: "bottom", 
        duration: 2000,
        panelClass:"c_white" })
    }else{

    let state = "" + 
    (wat == 'JS' ? 'JS DATASET':'') + 
    (wat == 'COPY' ? 'COPY DATASET':'') + 
    "";
    // let title = "#" + id + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: name, state: state,
        sector:"dataset"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){
let newData = `[ 
${data}]`;

        if(wat == 'JS'){ this.getJS(id, name, newData) }
        if(wat == 'COPY'){ this.resource.copyCLIPBOARD(newData) }
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

  getJS(id:string, title:string, dataSVG:string){
    // DOWNLOAD CSV
    let text = dataSVG;

    const a = document.createElement('a');
    const type = text.split(".").pop();
    a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
    a.download = title +'_' + id + '_' + '.js';
    a.click();
  }

  expandME(id:string){
    this.router.navigate([ '/each-dataset/' + id ])
  }




}
