import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { ListComponentComponent } from '../list-component/list-component.component';
import { AlertComponentComponent } from '../alert-component/alert-component.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-componet.component.html',
  styleUrls: ['./dynamic-componet.component.scss']
})
export class DynamicComponetComponent implements OnInit {

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
        resolver = this.componentFactoryResolver.resolveComponentFactory(ListComponentComponent);
      case 'alert':
        resolver = this.componentFactoryResolver.resolveComponentFactory(AlertComponentComponent);
      default:
        resolver = this.componentFactoryResolver.resolveComponentFactory(ListComponentComponent);

    }
    this.vf.createComponent(resolver);

  }
  

}
