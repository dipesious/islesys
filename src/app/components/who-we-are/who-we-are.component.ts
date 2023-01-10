import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  loaded = false;
  brands = [//🇪🇺
    {name:"islesys holdings (co-op)", img:"/brand-islesys.jpeg", link:""},
    {name:"aimtera", flags:"🇮🇳🇩🇪", img:"/brand-aimtera.jpeg", link:""},
    {name:"frycold", flags:"🇮🇳🇺🇸", img:"/brand-frycold.jpeg", link:""},
    {name:"mapwale", flags:"🇮🇳🇬🇧", img:"/brand-mapwale.jpeg", link:""},
    {name:"iconwho", flags:"🇮🇳🇯🇵", img:"/brand-iconwho.jpeg", link:""},
    {name:"Communicator App (co-op)", img:"/brand-xxx.jpeg", link:""},
    {name:"icons (co-op iconwho)", img:"/brand-icons.jpeg", link:""},
    {name:"maps (co-op mapwale)", img:"/brand-maps.jpeg", link:""},
    {name:"datasets", flags:"🇮🇳🇨🇭", img:"/brand-datasets.jpeg", link:""},
    {name:"fonts (co-op)", img:"/brand-fonts.jpeg", link:""},
    {name:"models", flags:"🇭🇰🇰🇷🇯🇵", img:"/brand-models.jpeg", link:""},
    {name:"images", flags:"🇮🇳🇰🇷🇻🇳", img:"/brand-images.jpeg", link:""},
    {name:"videos", flags:"🇮🇳🇰🇷🇻🇳", img:"/brand-videos.jpeg", link:""},
    {name:"tracks", flags:"🇧🇷🇰🇷🇫🇷", img:"/brand-tracks.jpeg", link:""},
    {name:"Capable GPT3+ (co-op)", img:"/brand-xxx.jpeg", link:""},
    {name:"palettes", flags:"🇮🇳🇭🇰🇷🇺", img:"/brand-palettes.jpeg", link:""},
    {name:"gradients", flags:"🇮🇳🇭🇰🇷🇺", img:"/brand-gradients.jpeg", link:""},
    {name:"patterns", flags:"🇮🇳🇭🇰🇷🇺", img:"/brand-patterns.jpeg", link:""},
    {name:"shades", flags:"🇮🇳🇭🇰", img:"/brand-shades.jpeg", link:""},
    {name:"Strategy M2PA+ (co-op)", /*Modular Multi-Slug Pre-trained Adapter*/ img:"/brand-xxx.jpeg", link:""},
    // {name:"xxx", img:"/brand-xxx.jpeg", link:""},
  ]

  constructor() { 
    this.execute()
  }

  ngOnInit(): void {
  }

  execute(){
    this.loaded = false;

  }
}
