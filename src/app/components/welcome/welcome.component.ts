import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  states = [
    {name:"Texas, USA", img:"usa.png", ers:30,ed:219,score:-1},
    {name:"Hong Kong", img:"china.png", ers:18,ed:177,score:1},
    {name:"Israel", img:"israel.png", ers:6.4,ed:158,score:1},
    {name:"California, USA", img:"usa.png", ers:4.4,ed:129,score:1},
    {name:"France, EU", img:"european.png", ers:3.7,ed:118,score:1},
    {name:"Shenzhen, China", img:"china.png", ers:3.6,ed:111,score:-1},
    {name:"Kansai, Japan", img:"japan.png", ers:3.1,ed:107,score:-1},
    {name:"Germany, EU", img:"european.png", ers:2.8,ed:106,score:1},
    {name:"England, UK", img:"uk.png", ers:2.4,ed:91.4,score:1},
    {name:"Taiwan", img:"taiwan.png", ers:2.2,ed:90.7,score:-1},
    {name:"Maharashtra, India", img:"india.png", ers:2.1,ed:89,score:1},
    {name:"South Korea", img:"south-korea.png", ers:2.1,ed:89,score:1},
  ];

  // testmo = [
  //   {name:"Katherine Langford", desig:"Designer", img:"assets/test_4.png", info:"Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others."},
  //   {name:"Will Tudor", desig:"Project Manager", img:"assets/test_1.png", info:"Everyone loves it; it has democratized our finance function. In some ways they shattered hierarchy and brought us together."},
  //   {name:"Krishna Hundal", desig:"Developer", img:"assets/test_2.png", info:"Islesys makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key."},
  //   {name:"Terry Ivans", desig:"Marketing", img:"assets/test_3.png", info:"Now that we've switched to a remote environment, with the use of Islesys, we can now limit the number of meetings we have regarding specific projects and turn to Islesys for updates instead."},
  // ];
  // tesNow = this.testmo[0];


  products = [
    { cost:49.99, price: 79.99, off: 15, name:'Islesys T-Shirt', a:'', f:'', j:'' },
    { cost:49.99, price: 79.99, off: 15, name:'Islesys Caps', a:'', f:'', j:'' },
    { cost:49.99, price: 79.99, off: 15, name:'Islesys Hodey', a:'', f:'', j:'' },
    { cost:49.99, price: 79.99, off: 15, name:'Islesys Army Bag', a:'', f:'', j:'' },
  ]

  imgLoaded:string[] = [];

  constructor(
    public auth: AuthService,
    public resource: ResourceService,
    public seo: SeoService,
    ) { }

  ngOnInit(): void {
    let xTitle = "";
    let xDescription = "";
    let xURL = "";
    let xImage = "";
    let xKeywords = "";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  // changeTestmo(doW:number){
  //   let x = this.testmo.indexOf(this.tesNow)
  //   if(doW < 0){
  //     const v = x == 0;
  //     console.log(v)
  //     this.tesNow = !v ? this.testmo[x + doW] : this.testmo[this.testmo.length - 1];
  //   }else{
  //     const v = this.testmo.length == (x+1);
  //     console.log(v)
  //     this.tesNow = !v ? this.testmo[x + doW] : this.testmo[0];
  //   }
  // }

  goPack(what:string){
    this.auth.user$.pipe(take(1)).subscribe(mine => {

      if(!mine){
        this.resource.router.navigate(['/sign']);

        if(!what){

        }else{
          if(what == 'Upgrade'){
            this.resource.router.navigate(['/sign/upgrade-account']);
          }else{
            if(what == 'Apply'){
              this.resource.router.navigate(['/sign/apply-for-enterprise']);
            }else{
              // 'Error'
            }
          }
        }

      }else{
        
        if(what == ''){
          this.resource.router.navigate(['/cart/continue-upgrade']);
        }
        
        if(what == 'Upgrade'){
          this.resource.router.navigate(['/cart/upgrade-account']);
        }

        if(what == 'Apply'){
          this.resource.router.navigate(['/cart/apply-for-enterprise']);
        }
        
      }

    })
  }

}
