import { Component, OnInit, Input } from '@angular/core';
import { DependencyService } from 'src/app/services/dependency.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  @Input() activePayment!: any;

  constructor(
    public depends: DependencyService,
    public resource: ResourceService
  ) { }

  ngOnInit(): void {
  }

  getPay(varient:string){
    return this.resource.cartList[ this.resource.cartList.findIndex(x => x.name == varient ) ].way
  }

}
