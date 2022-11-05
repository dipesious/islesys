import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }


  get windowRef() {
    return window
  }
  

  get nativeWindow(): any {
    if (isPlatformBrowser(this.platformId)) {
      return this.windowRef;
    }
  }
}
