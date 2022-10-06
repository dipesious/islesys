import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoPaletteService } from 'src/app/services/algorithm/algo-palette.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { AddPaletteComponent } from '../../manage/add-palette/add-palette.component';

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


  constructor(
    public auth:AuthService,
    public page: AlgoPaletteService,
    public resource:ResourceService,
    public dialog: MatDialog,
  ) {
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
    this.page.init('palettes', 'name', { reverse: false, prepend: false,  })
    }
  }

  ngOnInit(): void {
    //this.execute()
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

}
