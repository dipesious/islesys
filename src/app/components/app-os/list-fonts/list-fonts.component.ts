import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { FontModel } from 'src/app/universal.model';
import { DemandComponent } from '../../demand/demand.component';
import { AddFontComponent } from './add-font/add-font.component';

@Component({
  selector: 'app-list-fonts',
  templateUrl: './list-fonts.component.html',
  styleUrls: ['./list-fonts.component.scss']
})
export class ListFontsComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  fontList$: Observable<FontModel[]> = of();
  showCode:string[] = []
  
  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  fontSize = 1;
  demoMode = "Normal";

  constructor(
    public auth:AuthService,
    public dialog: MatDialog,
    public resource: ResourceService,
  ) {
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );
  }

  ngOnInit(): void {
    this.execute()
  }

  submitFont(){
    const dialogRef = this.dialog.open(AddFontComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  execute(){
    this.auth.getAllFONT().pipe(take(1)).subscribe((values:any[]) => {
      this.fontList$ = of(values)
      this.options = [];
      for (let i = 0; i < values.length; i++) {
        const element = values[i];
        this.options.push(element.name)
      }
    })
    // const values = {
    //   id:"KCchYPIYgNMqfARGXgGB",
    //   by:"Dipesh Bhoir", contact:"+919876543210", 
    //   name: "World map", about:"Mercator", data:{},
    //   active:true
    // }
    // this.mapList$ = of([values])
  }

  fontSizeSet(x:number){
    if(x < 0){
      this.fontSize = this.fontSize - 2;
    }else{
      this.fontSize = this.fontSize + 2;
    }
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


  expandME(id:string){}

  getLink(link:any){
return `<style>
${link}
</style>`
  }

  getClass(about:any){
return `.islesys{
font-family: ${about} }`
  }

}
