import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../service/markdown/reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private themes: string[] = ['dark-theme', 'white-theme', 'orange-theme',];
  private logoSrc: string[] = ['assets/IN-white.svg', 'assets/IN-black.svg', 'assets/IN-orange.svg',];
  private primaryTextColor: string[] = ['white', 'black', '#f9aa33'];
  private themeTracker: number = 0;
  public imgSrc: any = 'assets/IN-white.svg';

  data: string = 'There\'s a lot of silence here';
  show: boolean = false;

  showHide() {
    this.show = !this.show;
  }

  constructor(private markdown: ReaderService) { }

  ngOnInit(): void {
    this.markdown.getMarkdown().subscribe(data => {
      this.data = data;
    })
  }

  changeTheme() {
    if (this.themeTracker < this.themes.length - 1)
      this.themeTracker += 1;
    else
      this.themeTracker = 0;
    this.imgSrc = this.logoSrc[this.themeTracker];
    document.getElementById('main').style.color = this.primaryTextColor[this.themeTracker];
    document.body.classList.remove(document.body.classList.value);
    document.body.classList.add(this.themes[this.themeTracker]);
  }
}
