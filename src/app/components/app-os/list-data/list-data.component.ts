import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoDatasetService } from 'src/app/services/algorithm/algo-dataset.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
import { DatasetModel } from 'src/app/universal.model';
import { DemandComponent } from '../../demand/demand.component';
import { AddDataComponent } from './add-data/add-data.component';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]
  
  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  xxx = '';

  constructor(
    public auth:AuthService,
    public resource: ResourceService,
    public page: AlgoDatasetService,
    public dialog: MatDialog,
    private router: Router, 
    public seo: SeoService,
  ) {
    let x:any = '';
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(x),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
    this.page.init('tables', 'name', { reverse: false, prepend: false,  })
    }
  
    this.execute()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    let xTitle = "islesys datasets free download";
    let xDescription = "We are building a massive library of formatted datasets. The datasets undertaking by Dipesh Bhoir with over 50k+ datasets at your fingertips.";
    let xURL = "https://islesys.com/datasets";
    let xImage = "";
    let xKeywords = "datasets, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  submitData(){
    const dialogRef = this.dialog.open(AddDataComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  execute(){
  }

  getDataLanguage(id:string){
    return  this.resource.tableType[ this.resource.tableType.findIndex(x =>  x.info == id ) ].name 
  }



  getME(wat:string, name:string, id:string, data:string){
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
          ${data} 
        ]`;

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
