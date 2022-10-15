import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoIconService } from 'src/app/services/algorithm/algo-icon.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { IconModel } from 'src/app/universal.model';
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
    ) { 
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    if(!page.firstHit){
      this.page.fillX = "";
      this.page.toneX = "";
      this.execute("Outline", "Flat")
    }
  }

  ngOnInit(): void {
    // const values = [
    //   {
    //     type:"", fill:"Regular", tone:"Flat",
    //     by:"Dipesh", contact:"+919892381514", 
    //     name:'name', data:`<svg viewBox="0 0 24 24"><path d="m22 4.75c0-.206-.163-.75-.75-.75-.159 0-.305.071-.45.15-1.772.966-3.4 1.85-3.4 1.85v11.996s1.913 1.054 3.399 1.854c.146.079.292.15.451.15.583 0 .75-.533.75-.75zm-20 0c0-.206.163-.75.75-.75.159 0 .305.071.45.15 1.772.966 3.4 1.85 3.4 1.85v11.996s-1.913 1.054-3.399 1.854c-.146.079-.292.15-.451.15-.583 0-.75-.533-.75-.75zm14 2.25c0-.552-.448-1-1-1h-6c-.552 0-1 .448-1 1v10c0 .552.448 1 1 1h6c.552 0 1-.448 1-1z" fill-rule="nonzero"/></svg>`,
    //     active:true
    //   },
    // ];
    // this.execute("Outline", "Flat")
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
