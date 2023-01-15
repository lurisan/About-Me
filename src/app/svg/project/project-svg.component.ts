import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-svg',
  templateUrl: './project-svg.component.html',
  styleUrls: []
})
export class ProjectSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
