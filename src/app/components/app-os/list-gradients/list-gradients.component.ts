import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router: Router, 
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


  getME(wat:string, name:string, id:string, cssData:string){
    let state = "" + 
    (wat == 'CSS' ? 'CSS GRADIENT':'') + 
    (wat == 'JPEG' ? 'JPEG GRADIENT':'') + 
    "";
    // let title = "#" + color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        id,
        title: name, state: state,
        sector:"gradient"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){

        if(wat == 'CSS'){ this.getCSS(cssData) }
        if(wat == 'JPEG'){ this.getJPEG() }

      }

      if(result?.type == 'Community'){
        this.router.navigate(['/cart/upgrade-account']);
      }
      if(result?.type == 'Enterprise'){
        this.router.navigate(['/cart/apply-for-enterprise']);
      }
      if(result?.type == 'getHelp'){
        this.router.navigate(['/getHelp/gradients']);
      }
    });
  }

  getCSS(cssData:string){
    // COPY CSS TO CLIPBOARD
    this.resource.copyCLIPBOARD(cssData)
  }

  getJPEG(){
    // DOWNLOAD JPEG
  }


  expandME(id:string){
    this.router.navigate([ '/view-gradient/' + id ])
  }

}
