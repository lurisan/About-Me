import { Component, Input } from '@angular/core';

@Component({
  selector: 'vision-svg',
  templateUrl: './vision-svg.component.html',
  styleUrls: []
})
export class VisionSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
