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
    public page: AlgoMapService,
    public resource: ResourceService,
    public dialog: MatDialog,
  ) {
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
      this.page.init('maps', 'info', { reverse: false, prepend: false,  })
    }
  }

  ngOnInit(): void {
    //this.execute()
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

}
