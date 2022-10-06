import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { AddDataComponent } from '../../manage/add-data/add-data.component';

interface TableModel {
  id:string,
  type:number|undefined, about:string, info:string, 

  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean
};

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

  tableList$: Observable<TableModel[]> = of();
  
  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  execute(){
    this.auth.getAllTABLE().pipe(take(1)).subscribe((values:any[]) => {
      this.tableList$ = of(values)
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

}
