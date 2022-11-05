import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  constructor(
    private title: Title, 
    private meta: Meta
    ) { }

  setSEO(ztitle: string, zdescription: string, zURL: string, zimage :string, zkeywords: string){
    let xURL = zURL || "https://islesys.com/";
    let xTitle = ztitle || "islesys - Small steps Long vision";
    let xImage = zdescription || "World's Largest Open Content & Asia's Largest Content Library. An Ecosystem around Reusable tech dependencies that is an expanding mecca for digital assets.";
    let xDescription = zimage || "https://islesys.com/assets/logo.png";
    let xKeywords = zkeywords || "Islesys, icons, maps, datasets, palettes, gradients, patterns, fonts, colors, free download, Dipesh Bhoir";

    this.updateOgUrl(xURL);
    this.updateTitle(xTitle);
    this.updateDescription(xDescription);
    this.updateOgImage(xImage);
    this.updateKeywords(xKeywords);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ property: 'og:url', content: url })
    this.meta.updateTag({ property: 'twitter:url', content: url })
  }
  updateTitle(title: string) {
    this.title.setTitle(title)
    this.meta.updateTag({ name: 'title', content: title })
    this.meta.updateTag({ property: 'og:title', content: title })
    this.meta.updateTag({ property: 'twitter:title', content: title })
    //let bodyX = <HTMLDivElement> document.getElementById("title");
    //try{bodyX.innerText = title;}catch(e){console.error("error: " + e);}
  }
  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ property: 'og:description', content: desc })
    this.meta.updateTag({ property: 'twitter:description', content: desc })
    //let bodyX = <HTMLDivElement> document.getElementById("about");
    //try{bodyX.innerText = desc;}catch(e){console.error("error: " + e);}
  }
  updateOgImage(image: string) {
    this.meta.updateTag({ property: 'og:image', content: image })
    this.meta.updateTag({ name: 'twitter:image', content: image })
    //let bodyX = <HTMLImageElement> document.getElementById("avatar");
    //try{bodyX.src = image;}catch(e){console.error("error: " + e);}
  }
  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords })
  }

}