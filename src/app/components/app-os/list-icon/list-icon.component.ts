import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoIconService } from 'src/app/services/algorithm/algo-icon.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
import { AddIconComponent } from './add-icon/add-icon.component';


@Component({
  selector: 'app-list-icon',
  templateUrl: './list-icon.component.html',
  styleUrls: ['./list-icon.component.scss']
})
export class ListIconComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  goDark = false;
  
  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;


  constructor(
    public auth:AuthService,
    public resource:ResourceService,
    public page: AlgoIconService,
    public dialog: MatDialog,
    public seo: SeoService,
    ) { 
      let x:any = '';
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(x),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
      this.page.fillX = "";
      this.page.toneX = "";
      this.execute("Outline", "Flat")
    }
  }

  ngOnInit(): void {
    let xTitle = "islesys icons free download";
    let xDescription = "We are building a gargantuan library of compatible icons. The icons undertaking by Dipesh Bhoir with over 50k+ icons at your fingertips.";
    let xURL = "https://islesys.com/icons";
    let xImage = "";
    let xKeywords = "icons, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  submitIcon(){
    const dialogRef = this.dialog.open(AddIconComponent, {
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

  execute(fill:string, tone:string){
    if(
      //this.page.firstHit && 
      this.page.fillX == fill && this.page.toneX == tone
      ){

    }else{
      this.page.fillX = fill;
      this.page.toneX = tone;
      this.page.init('icons', 'name', { reverse: false, prepend: false  })
    }
    // this.auth.getAllICON(this.fillX, this.toneX)/*.pipe(take(1))*/.subscribe((values:any[]) => {
    //   this.iconList$ = of(values)
    //   this.options = [];
    //   for (let i = 0; i < values.length; i++) {
    //     const element = values[i];
    //     this.options.push(element.name)
    //   }
    // })
  }

}
