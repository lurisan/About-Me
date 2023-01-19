import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-svg',
  templateUrl: './work-svg.component.html',
  styleUrls: []
})
export class WorkSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
