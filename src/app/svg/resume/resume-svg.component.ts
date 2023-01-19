import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-svg',
  templateUrl: './resume-svg.component.html',
  styleUrls: []
})
export class ResumeSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
