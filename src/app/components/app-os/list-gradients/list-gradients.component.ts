import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoGradientService } from 'src/app/services/algorithm/algo-gradient.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { DemandComponent } from '../../demand/demand.component';
import { AddGradientComponent } from './add-gradient/add-gradient.component';

@Component({
  selector: 'app-list-gradients',
  templateUrl: './list-gradients.component.html',
  styleUrls: ['./list-gradients.component.scss']
})
export class ListGradientsComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  currentTyp = "";

  xxx = "Linear";

  constructor(
    public auth:AuthService,
    public page: AlgoGradientService,
    public resource:ResourceService,
    public dialog: MatDialog,
  ) {
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
    this.page.init('gradients', 'name', { reverse: false, prepend: false,  })
    }
  }

  ngOnInit(): void {
    // this.execute()
  }

  submitGradient(){
    const dialogRef = this.dialog.open(AddGradientComponent, {
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


  getME(wat:string, name:string, id:string, color:string){
    let state = "" + 
    (wat == 'CSS' ? 'CSS GRADIENT':'') + 
    (wat == 'JPEG' ? 'JPEG GRADIENT':'') + 
    "";
    let title = "#" + color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: title, state: state,
        sector:"gradient"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){

        if(wat == 'CSS'){ this.getCSS() }
        if(wat == 'JPEG'){ this.getJPEG() }

      }
      if(wat == 'Community'){

      }
      if(wat == 'Enterprise'){

      }
    });
  }

  getCSS(){
    // COPY CSS TO CLIPBOARD
  }

  getJPEG(){
    // DOWNLOAD JPEG
  }


  expandME(id:string){}

}
