import { Component, Input } from '@angular/core';

@Component({
  selector: 'aim-svg',
  templateUrl: './aim-svg.component.html',
  styleUrls: []
})
export class AimSVG {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
