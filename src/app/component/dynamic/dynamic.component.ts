import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @ViewChild("vf", { read: ViewContainerRef })
  vf: ViewContainerRef;
  @Input() data: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
   

  }
  ngAfterViewInit(){
    let resolver;
    switch (this.data) {
      case 'list':
        resolver = this.componentFactoryResolver.resolveComponentFactory(ListComponent);
      case 'alert':
        resolver = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    }
    this.vf.createComponent(resolver);

  }
  

}
