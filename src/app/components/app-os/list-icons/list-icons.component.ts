import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AlgoIconService } from 'src/app/services/algorithm/algo-icon.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
import { AddIconComponent } from './add-icon/add-icon.component';


@Component({
  selector: 'app-list-icons',
  templateUrl: './list-icons.component.html',
  styleUrls: ['./list-icons.component.scss']
})
export class ListIconsComponent implements OnInit, OnDestroy {

  mySubscription;

  iconList$:Observable<any[]> = of()

  empty=0;

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  goDark = false;
  
  // searching = new FormControl('');
  // options: string[] = [];
  // filteredOptions: Observable<string[]>;

  currentTyp = "";
  searchTerm = "";

  constructor(
    public auth:AuthService,
    public resource:ResourceService,
    public page: AlgoIconService,
    public dialog: MatDialog,
    public seo: SeoService,
    private actRoute: ActivatedRoute,
    private router: Router, 
    ) { 

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
  // Trick the Router into believing it's last link wasn't previously loaded
      this.router.navigated = false;
      // this.process()
      }
    });  

  
  }

  ngOnInit(): void {
    let xTitle = "Download icons svg, webp, png";
    let xDescription = "We are building a gargantuan library of compatible icons. The icons undertaking by Dipesh Bhoir with over 50k+ icons at your fingertips.";
    let xURL = "https://islesys.com/icons";
    let xImage = "";
    let xKeywords = "icons, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)

    this.process()
  }

  ngOnDestroy(){
    if (this.mySubscription) {
     this.mySubscription.unsubscribe();
    }
  }

  process(){

    const z = this.actRoute.snapshot.params;
    const name = z['name'];
    console.log('Got',name)

    // if(!name){
      if(!this.page.firstHit){
        this.currentTyp = (name || "");
        this.page.fillX = "";
        this.page.toneX = "";

        if(this.resource.router.url.includes('/icons')){
          this.execute((name || ""), "Outline", "Flat")
        }

        if(this.resource.router.url.includes('/outline-icons')){
          this.execute((name || ""), "Outline", "Flat")
        }

        if(this.resource.router.url.includes('/filled-icons')){
          this.execute((name || ""), "Filled", "Flat")
        }

        if(this.resource.router.url.includes('/duotone-icons')){
          this.execute((name || ""), "Filled", "Duotone")
        }

        if(this.resource.router.url.includes('/vibrant-icons')){
          this.execute((name || ""), "Filled", "Vibrant")
        }

        if(this.resource.router.url.includes('/animated-icons')){
          this.execute((name || ""), "Animated", "Duotone")
        }

        if(this.resource.router.url.includes('/flags-and-seals')){
          this.execute((name || ""), "Insignia", "Vibrant")
        }

      }
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

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }


  execute(name:string, fill:string, tone:string){
    console.log("get ", name, fill, tone)
    if(!name){
      this.empty=1;
      this.currentTyp = "";
      // this.page.fillX = fill;
      // this.page.toneX = tone;

      if(
        //this.page.firstHit && 
        this.page.fillX == fill && this.page.toneX == tone
        ){
      }else{
        this.page.fillX = fill;
        this.page.toneX = tone;
        this.page.init('icons', 'name', { reverse: false, prepend: false  })
      }
    }else{
      this.empty=2;
      this.currentTyp = name;
      this.page.fillX = fill;
      this.page.toneX = tone;
  

      this.auth.getAllICON(name //, fill, tone
        ).pipe(take(1)).subscribe((values:any[]) => {
        console.log("M", name, fill, tone, values)
        this.iconList$ = of(values)
        // this.options = [];
        // for (let i = 0; i < values.length; i++) {
        //   const element = values[i];
        //   this.options.push(element.name)
        // }
      })
    }
  }
/*
  executeEmpty(fill:string, tone:string){
    this.empty=1;
    this.currentTyp = "";

    if(
      //this.page.firstHit && 
      this.page.fillX == fill && this.page.toneX == tone
      ){
    }else{
      this.page.fillX = fill;
      this.page.toneX = tone;
      this.page.init('icons', 'name', { reverse: false, prepend: false  })
    }
  }

  executeList(name:string, fill:string, tone:string){
    this.empty=2;

      this.page.fillX = fill;
      this.page.toneX = tone;
      this.currentTyp = name;

    this.auth.getAllICON(name)/ *.pipe(take(1))* /.subscribe((values:any[]) => {
      this.iconList$ = of(values)
      // this.options = [];
      // for (let i = 0; i < values.length; i++) {
      //   const element = values[i];
      //   this.options.push(element.name)
      // }
    })
  }
*/

}
