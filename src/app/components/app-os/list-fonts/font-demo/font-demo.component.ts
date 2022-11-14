import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-demo',
  templateUrl: './font-demo.component.html',
  styleUrls: ['./font-demo.component.scss']
})
export class FontDemoComponent implements OnInit {

  @Input() textStyle!: any;
  @Input() textDemo!: any;
  @Input() fontSize!: any;
  @Input() indexFont!: any;
  @Input() linkFont!: any;
  @Input() aboutFont!: any;
  @Input() demoMode!: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMyStyle(){
    return `<style>
    ${this.linkFont}
    .fontNames .font${this.indexFont}{ font-family: ${this.aboutFont};}
    </style>`
  }

}
