import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoPatternService } from 'src/app/services/algorithm/algo-pattern.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { AddPatternComponent } from './add-pattern/add-pattern.component';

interface PatternModel {
  id:string,
  type:number|undefined, demoCSS:string; about:string, info:string, 

  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean
};

@Component({
  selector: 'app-list-patterns',
  templateUrl: './list-patterns.component.html',
  styleUrls: ['./list-patterns.component.scss']
})
export class ListPatternsComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(
    public auth:AuthService,
    public resource: ResourceService,
    public page: AlgoPatternService,
    public dialog: MatDialog,
  ) {
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
    this.page.init('patterns', 'name', { reverse: false, prepend: false,  })
    }
  }

  ngOnInit(): void {
    this.execute()
  }

  submitPattern(){
    const dialogRef = this.dialog.open(AddPatternComponent, {
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
