import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-svg',
  templateUrl: './blog-svg.component.html',
  styleUrls: []
})
export class BlogSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
