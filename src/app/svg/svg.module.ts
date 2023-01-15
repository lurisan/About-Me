import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AchievementSvg } from './achievement/achievement-svg.component';
import { AimSVG } from './aim/aim-svg.component';
import { BlogSvg } from './blog/blog-svg.component';
import { ResumeSvg } from './resume/resume-svg.component';
import { VisionSvg } from './vision/vision-svg.component';
import { WorkSvg } from './work/work-svg.component';
import { ProjectSvg } from './project/project-svg.component';
import { EducationSvg } from './education/education-svg.component';
import { InSvg } from './in/in-svg.component';

const components = [
  AimSVG,
  BlogSvg,
  ResumeSvg,
  VisionSvg,
  AchievementSvg,
  WorkSvg,
  ProjectSvg,
  EducationSvg,
  InSvg
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SvgModule { }
