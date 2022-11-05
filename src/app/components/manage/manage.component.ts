import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlgoDatasetService } from 'src/app/services/algorithm/algo-dataset.service';
import { AlgoFontService } from 'src/app/services/algorithm/algo-font.service';
import { SignitureService } from 'src/app/services/signiture.service';
import { AlgoGradientService } from './../../services/algorithm/algo-gradient.service';
import { AlgoIconService } from './../../services/algorithm/algo-icon.service';
import { AlgoMapService } from './../../services/algorithm/algo-map.service';
import { AlgoPaletteService } from './../../services/algorithm/algo-palette.service';
import { AlgoPatternService } from './../../services/algorithm/algo-pattern.service';
import { AuthService } from './../../services/auth.service';
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
    {icon:"workspace_premium", name:"Who We Are",path:"/who-we-are"},
    {icon:"rocket_launch", name:"File a Bug",path:"/file-a-bug"},

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
  
  iconicColors = [
    {name:"Red", id:"red"},
    {name:"Orange", id:"orange"},
    {name:"Yellow", id:"yellow"},
    {name:"Green", id:"green"},
    {name:"Blue", id:"blue"},
    {name:"Indigo", id:"indigo"},
    {name:"Violet", id:"violet"},
  ];

  constructor(
    //public auth:AuthService,
  
    public pageIcon: AlgoIconService,
    // public pageMap: AlgoMapService,
    public pageDataset: AlgoDatasetService,
    public pagePalette: AlgoPaletteService,
    public pageGradient: AlgoGradientService,
    public pagePattern: AlgoPatternService,
    public pageFont: AlgoFontService,
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

  setIconColor(id:string){
    if(!this.resource.modeBgFc){
      this.resource.bgColor !== id ? this.resource.bgColor = id: this.resource.bgColor = '';
    }else{
      this.resource.fgColor !== id ? this.resource.fgColor = id: this.resource.fgColor = '';
    }
  }

  scaleMap(x:number){
    if(x == -1){
      this.resource.scaleMapX = this.resource.scaleMapX - 0.1;
    }else{
      this.resource.scaleMapX = this.resource.scaleMapX + 0.1;
    }
  }
  moveMapUD(x:number){
    if(x == -1){
      this.resource.moveMapUD = this.resource.moveMapUD - 10;
    }else{
      this.resource.moveMapUD = this.resource.moveMapUD + 10;
    }
  }
  moveMapLR(x:number){
    if(x == -1){
      this.resource.moveMapLR = this.resource.moveMapLR - 10;
    }else{
      this.resource.moveMapLR = this.resource.moveMapLR + 10;
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
      // this.pageMap.more()
      this.pageDataset.more()
      this.pagePalette.more()
      this.pageGradient.more()
      this.pagePattern.more()
      this.pageFont.more()
    }
    if (top === 0) {
      console.log('top')
    }
  } 

  activeME(isActive:any, p:string){
    return (
    isActive ||

    p == '/explore' && this.resource.router.url.includes('/icons') ||
    p == '/explore' && this.resource.router.url.includes('/maps') ||
    p == '/explore' && this.resource.router.url.includes('/datasets') ||
    p == '/explore' && this.resource.router.url.includes('/palettes') ||
    p == '/explore' && this.resource.router.url.includes('/gradients') ||
    p == '/explore' && this.resource.router.url.includes('/patterns') ||
    p == '/explore' && this.resource.router.url.includes('/fonts') ||
    p == '/explore' && this.resource.router.url.includes('/shades') ||

    p == '/explore' && this.resource.router.url.includes('/free-icon/') ||
    p == '/explore' && this.resource.router.url.includes('/edit-map/') ||
    p == '/explore' && this.resource.router.url.includes('/each-dataset/') ||
    p == '/explore' && this.resource.router.url.includes('/view-palette/') ||
    p == '/explore' && this.resource.router.url.includes('/view-gradient/') ||
    p == '/explore' && this.resource.router.url.includes('/view-pattern/') ||
    p == '/explore' && this.resource.router.url.includes('/opensource-font/') ||
    p == '/explore' && this.resource.router.url.includes('/shades-of-color/') ||

    false)
    
  }

}
