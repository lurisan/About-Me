import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.scss']
})
export class HomeV2Component implements OnInit {
  private themes: string[] = ['dark-theme', 'white-theme', 'orange-theme',];
  private logoSrc: string[] = ['assets/IN-white.svg', 'assets/IN-black.svg', 'assets/IN-orange.svg',];
  private primaryTextColor: string[] = ['white', 'black', '#f9aa33'];
  private themeTracker: number = 0;
  public imgSrc: any = 'assets/IN-white.svg';

  constructor() { }

  ngOnInit(): void {
    document.getElementById('a_navbar').style.color = this.primaryTextColor[this.themes.indexOf(document.body.classList.value)];
  }

  changeTheme() {
    if (this.themeTracker < this.themes.length - 1)
      this.themeTracker += 1;
    else
      this.themeTracker = 0;
    this.imgSrc = this.logoSrc[this.themeTracker];
    document.getElementById('a_navbar').style.color = this.primaryTextColor[this.themeTracker];
    document.body.classList.remove(document.body.classList.value);
    document.body.classList.add(this.themes[this.themeTracker]);
  }

}
