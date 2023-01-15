import { Component, Input } from '@angular/core';

@Component({
  selector: 'achievement-svg',
  templateUrl: './achievement-svg.component.html',
  styleUrls: []
})
export class AchievementSvg {
  @Input() fillColor: string = 'black';
  @Input() height: number = 100;
  @Input() width: number = 100;
}
