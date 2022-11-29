import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  loaded = false;
  brands = [
    {name:"islesys holdings", img:"/brand-islesys.jpeg", link:""},
    {name:"aimtera", img:"/brand-aimtera.jpeg", link:""},
    {name:"frycold", img:"/brand-frycold.jpeg", link:""},
    {name:"mapwale", img:"/brand-mapwale.jpeg", link:""},
    {name:"iconwho", img:"/brand-iconwho.jpeg", link:""},
    {name:"icons", img:"/brand-icons.jpeg", link:""},
    {name:"maps", img:"/brand-maps.jpeg", link:""},
    {name:"datasets", img:"/brand-datasets.jpeg", link:""},
    {name:"fonts", img:"/brand-fonts.jpeg", link:""},
    {name:"models", img:"/brand-models.jpeg", link:""},
    {name:"images", img:"/brand-images.jpeg", link:""},
    {name:"videos", img:"/brand-videos.jpeg", link:""},
    {name:"tracks", img:"/brand-tracks.jpeg", link:""},
    {name:"palettes", img:"/brand-palettes.jpeg", link:""},
    {name:"gradients", img:"/brand-gradients.jpeg", link:""},
    {name:"patterns", img:"/brand-patterns.jpeg", link:""},
    {name:"shades", img:"/brand-shades.jpeg", link:""},
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
