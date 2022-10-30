import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { DemandComponent } from 'src/app/components/demand/demand.component';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-download-font',
  templateUrl: './download-font.component.html',
  styleUrls: ['./download-font.component.scss']
})
export class DownloadFontComponent implements OnInit {

  mySubscription;

  font$: Observable<any> = of();
  sideToggle = false;

  constructor(
    public dialog: MatDialog,
    public auth:AuthService,
    public resource:ResourceService,
    private actRoute: ActivatedRoute,
    private router: Router, 
    private snackBar: MatSnackBar,
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
  // Trick the Router into believing it's last link wasn't previously loaded
      this.router.navigated = false;
      }
    });  

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const x = this.actRoute.snapshot.params;
    const id = x['id'];
    this.execute(id)
    console.log(id)
  }

  execute(id:string){
    // this.font$ = this.auth.getFont(id).pipe(take(1))
  }

}
