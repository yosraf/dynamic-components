import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild("button", { read: ViewContainerRef })
  button: ViewContainerRef;
  data = [
    "fruit",
    "food",
    "pizza"
  ];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let resolver = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
    this.button.createComponent(resolver);
  }

}
