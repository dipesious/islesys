import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const head = document.getElementsByTagName('head')[0];
    let x = document.getElementById("adverta");
    if(x){
      console.log(x)
      head.removeChild(x);
    }
    
    const script = document.createElement('script');
    script.setAttribute("id", "adverta");
    script.setAttribute("async", "async");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("src", '//pl16241193.highperformancecpmgate.com/d366d1d19d0b3697d3b7ce3836f887e7/invoke.js');
    
    head.insertBefore(script, head.firstChild);
  }

  ngOnDestroy(){
    const head = document.getElementsByTagName('head')[0];
    let x = document.getElementById("adverta");
    if(x){
      console.log(x)
      head.removeChild(x);
    }
  }

}
