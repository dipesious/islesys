import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { mapModel } from 'src/app/universal.model';
import { AddMapComponent } from './add-map/add-map.component';

import { getStorage } from "firebase/storage";
import { AlgoMapService } from 'src/app/services/algorithm/algo-map.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-list-maps',
  templateUrl: './list-maps.component.html',
  styleUrls: ['./list-maps.component.scss']
})
export class ListMapsComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  currentTyp = "";

  constructor(
    public auth:AuthService,
    // public page: AlgoMapService,
    public resource: ResourceService,
    public dialog: MatDialog,
    public seo: SeoService,
  ) {
    let x:any = '';
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(x),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    // if(!page.firstHit){
    //   this.page.init('maps', 'info', { reverse: false, prepend: false,  })
    // }
  
    this.execute()
  }

  ngOnInit(): void {
    let xTitle = "Download maps svg, jpeg, png, webp";
    let xDescription = "We are building a diverse library of interactive maps. The maps undertaking by Dipesh Bhoir with over 1k+ maps at your fingertips.";
    let xURL = "https://mapwale.com/maps";
    let xImage = "";
    let xKeywords = "maps, free download, Mapwale, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  submitMap(){
    const dialogRef = this.dialog.open(AddMapComponent, {
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

  execute(){}

  getMaps(area:string){
    let z = [];
    z.push(...this.resource.globalMaps.filter(x => x.area?.includes(area) ));
    z.push(...this.resource.nationMaps.filter(x => x.area?.includes(area) ));
    return z;
  }

}
