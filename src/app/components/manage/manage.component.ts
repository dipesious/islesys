import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SignitureService } from 'src/app/services/signiture.service';
import { AlgoGradientService } from './../../services/algorithm/algo-gradient.service';
import { AlgoIconService } from './../../services/algorithm/algo-icon.service';
import { AlgoMapService } from './../../services/algorithm/algo-map.service';
import { AlgoPaletteService } from './../../services/algorithm/algo-palette.service';
import { AlgoPatternService } from './../../services/algorithm/algo-pattern.service';
import { AuthService } from './../../services/auth.service';
import { PaginationService } from './../../services/pagination.service';
import { ResourceService } from './../../services/resource.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  navLinks = [
    //{icon:"satellite_alt", name:"Deepstate",path:"/explore"},

    {icon:"emoji_food_beverage", name:"Explore",path:"/explore"},
    // {icon:"emoji_food_beverage", name:"How it Works",path:"/how-it-works"},
    {icon:"emoji_food_beverage", name:"Who We Are",path:"/who-we-are"},
    {icon:"emoji_food_beverage", name:"File a Bug",path:"/file-a-bug"},

    // {icon:"emoji_food_beverage", name:"Crowdfunding",path:"/ongoing-crowdfunds"},
    // {icon:"diversity_2", name:"Opensource",path:"/opensource-resources"},
    // {icon:"local_library", name:"Study abroad",path:"/education"},
    // {icon:"business_center", name:"Business abroad",path:"/business"},
    // {icon:"self_improvement", name:"The Cave",path:"/cave"},
  ]

  hideTop = true;
  menuShow = false;

  @ViewChild("mainContent") private mainContentDiv!: ElementRef<HTMLElement>;
  lang = [
    "Arabic",
    "Bengali",
    "English",
    "French",
    "German",
    "Gujarati",
    "Hindi",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Korean",
    "Mandarin Chinese",
    "Marathi",
    "Persian",
    "Portuguese",
    "Punjabi",
    "Russian",
    "Spanish",
    "Tamil",
    "Telugu",
    "Turkish",
    "Vietnamese",
    "Wu Chinese",
    "Yue Chinese",
  ]
  
  constructor(
    //public auth:AuthService,
  
    public pageIcon: AlgoIconService,
    public pagePalette: AlgoPaletteService,
    public pageGradient: AlgoGradientService,
    public pageMap: AlgoMapService,
    public pagePattern: AlgoPatternService,
    public auth:AuthService,
    public resource: ResourceService,
    public sign: SignitureService,
    private router: Router,
  ){}


  ngOnInit() {
    this.router.events.subscribe((evt:any) => {
      if (this.mainContentDiv && evt.navigationTrigger) {
        // this.mainContentDiv.nativeElement.scrollTop = 0;
        // console.log("W", this.mainContentDiv.nativeElement.scrollTop)
        this.clickS()
      }
    });
  }

  clickS(){
    this.mainContentDiv.nativeElement.scrollTop = 0;
  }

  scaleMap(x:number){
    if(x == -1){
      this.resource.scaleMapX = this.resource.scaleMapX - 0.1;
    }else{
      this.resource.scaleMapX = this.resource.scaleMapX + 0.1;
    }
  }

  // scrollHandler(e:any) {
  //   console.log(e)
  //   // should log top or bottom
  // }

  scrollHandler(e:any) {

    const top = e.target.scrollTop
    const height = this.mainContentDiv.nativeElement.scrollHeight
    const offset = this.mainContentDiv.nativeElement.offsetHeight

    //console.log('b', top, (height - offset))
    if (top > ((height - offset) - 2)) {
      console.log('bottom')
      this.pageIcon.more()
      this.pagePalette.more()
      this.pageGradient.more()
      this.pageMap.more()
      this.pagePattern.more()
    }
    if (top === 0) {
      console.log('top')
    }
  } 

}
