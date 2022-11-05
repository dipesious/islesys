import { Component, Input, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { SignitureService } from 'src/app/services/signiture.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  @Input() activeProfiles!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
