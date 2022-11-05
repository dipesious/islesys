import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoFontService } from 'src/app/services/algorithm/algo-font.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
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

  showCode:string[] = []
  
  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  fontSize = 1;
  demoMode = "Normal";

  constructor(
    public auth:AuthService,
    public resource: ResourceService,
    public page: AlgoFontService,
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
    this.page.init('fonts', 'name', { reverse: false, prepend: false,  })
    }
  
    this.execute()
  }

  ngOnInit(): void {
    let xTitle = "islesys fonts free download";
    let xDescription = "We are building an extensive library of writing systems. The fonts undertaking by Dipesh Bhoir with over 1200+ fonts at your fingertips.";
    let xURL = "https://islesys.com/fonts";
    let xImage = "";
    let xKeywords = "fonts, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
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


  expandME(id:string){
    this.router.navigate([ '/opensource-font/' + id ])
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

}
