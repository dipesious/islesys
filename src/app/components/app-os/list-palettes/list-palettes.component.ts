import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoPaletteService } from 'src/app/services/algorithm/algo-palette.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
import { DemandComponent } from '../../demand/demand.component';
import { AddPaletteComponent } from './add-palette/add-palette.component';

// interface init {
//   path: string, field: string, 
//   opts: {
//   limit: number,
//   reverse?: boolean, prepend?: boolean
//   }
// }

@Component({
  selector: 'app-list-palettes',
  templateUrl: './list-palettes.component.html',
  styleUrls: ['./list-palettes.component.scss']
})
export class ListPalettesComponent implements OnInit {
  
  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  currentTyp = "";

  xxx = "";

  constructor(
    public auth:AuthService,
    public page: AlgoPaletteService,
    public resource:ResourceService,
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
    this.page.init('palettes', 'name', { reverse: false, prepend: false,  })
    }
  
    //this.execute()
  }

  ngOnInit(): void {
    let xTitle = "Worlds largest palettes library";
    let xDescription = "We are building an extraordinary library of unique palettes. The palettes undertaking by Dipesh Bhoir with over 5k+ palettes at your fingertips.";
    let xURL = "https://islesys.com/palettes";
    let xImage = "";
    let xKeywords = "palettes, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  submitPalette(){
    const dialogRef = this.dialog.open(AddPaletteComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {},} );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');} );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  execute(){}



  getME(wat:string, name:string, id:string, color:string){
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

  // getCSS(){
  //   // DO NOTHING HERE
  // }

  // getJPEG(){
  //   // DO NOTHING HERE
  // }

  // getHEX(){
  //   // COPY HEX TO CLIPBOARD
  // }

  expandME(id:string){
    this.router.navigate([ '/view-palette/' + id ])
  }


}
