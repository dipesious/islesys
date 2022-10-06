import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

interface TableModel {
  id:string,
  type:number|undefined, demoText:string; demoCSS:string;
  //about:string, info:string, 

  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean
};

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

  fontList$: Observable<TableModel[]> = of();
  
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

  submitData(){}
  
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

}
