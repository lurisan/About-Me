import { Component, Input } from '@angular/core';

@Component({
  selector: 'education-svg',
  templateUrl: './education-svg.component.html',
  styleUrls: []
})
export class EducationSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
