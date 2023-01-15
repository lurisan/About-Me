import { Component, Input } from '@angular/core';

@Component({
  selector: 'in-svg',
  templateUrl: './in-svg.component.html',
  styleUrls: []
})
export class InSvg {
  @Input() height: number = 100;
  @Input() width: number = 100;
  @Input() infinitySign: string = '#83AA2E';
  @Input() leafLight: string = '#9CDD05';
  @Input() leafDark: string = '#94C609';
  @Input() roseLight: string = '#D90700';
  @Input() roseDark: string = '#FF2A2A';
}
