import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-app-os',
  templateUrl: './app-os.component.html',
  styleUrls: ['./app-os.component.scss']
})
export class AppOsComponent   {

  domainX = "https://islesys.com";

  constructor() { }

}
