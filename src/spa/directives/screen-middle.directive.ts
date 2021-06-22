import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[screenMiddle]'
})
export class ScreenMiddleDirective implements OnInit {
  private hasView = false;
  constructor(private template: TemplateRef<Object>,
    private screenService: ScreenService,
    private viewContainer: ViewContainerRef) {
    screenService.resize$.subscribe(() => {
      console.log(" this.onResize(); -> " + this.onResize())
      this.onResize();
    });
  }
  onResize() {
    this.screenMiddle = false;
  }
  ngOnInit() {
    this.onResize();
  }
  @Input()
  set screenMiddle(condition: any) {
    // console.log("this.screenService.screenWidth -> " + this.screenService.screenWidth)
    condition = this.screenService.screenWidth >= this.screenService.middlePixels;
   
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
