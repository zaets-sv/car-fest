import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[screenLarge]'
})
export class ScreenLargeDirective implements OnInit {
  private hasView = false;
  constructor(private template: TemplateRef<Object>,
    private screenService: ScreenService,
    private viewContainer: ViewContainerRef) {
    screenService.resize$.subscribe(() => {
      this.onResize();
    });
  }
  onResize() {
    this.screenLarge = false;
  }
  ngOnInit() {
    this.onResize();
  }
  @Input()
  set screenLarge(condition: any) {
    condition = this.screenService.screenWidth >= this.screenService.largePixels;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
