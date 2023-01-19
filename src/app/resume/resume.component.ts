import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lurisan-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  private themes: string[] = ['dark-theme', 'white-theme', 'orange-theme',];
  private logoSrc: string[] = ['assets/in/IN-white-red.svg', 'assets/in/IN-black-green.svg', 'assets/in/IN-orange-brown.svg',];
  private primaryTextColor: string[] = ['white', 'black', '#f9aa33'];
  private themeTracker = 0;
  public imgSrc: string = 'assets/in/IN-white-red.svg';

  ngOnInit(): void {
    const a_navbar = document.getElementById('a_navbar');
    if (a_navbar)
      a_navbar.style.color = this.primaryTextColor[this.themes.indexOf(document.body.classList.value)];
  }

  changeTheme() {
    if (this.themeTracker < this.themes.length - 1)
      this.themeTracker += 1;
    else
      this.themeTracker = 0;
    this.imgSrc = this.logoSrc[this.themeTracker];
    const a_navbar = document.getElementById('a_navbar');
    if (a_navbar)
      a_navbar.style.color = this.primaryTextColor[this.themeTracker];
    document.body.classList.remove(document.body.classList.value);
    document.body.classList.add(this.themes[this.themeTracker]);
  }

}
