import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../service/markdown/reader.service';

@Component({
  selector: 'lurisan-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private themes: string[] = ['dark-theme', 'white-theme', 'orange-theme',];
  private logoSrc: string[] = ['assets/in/IN-white-red.svg', 'assets/in/IN-black-green.svg', 'assets/in/IN-orange-brown.svg',];
  private primaryTextColor: string[] = ['white', 'black', '#f9aa33'];
  private themeTracker = 0;
  public imgSrc = 'assets/in/IN-white-red.svg';

  data = 'There\'s a lot of silence here';
  show = false;

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
    const main = document.getElementById('main');
    if (main)
      main.style.color = this.primaryTextColor[this.themeTracker];
    document.body.classList.remove(document.body.classList.value);
    document.body.classList.add(this.themes[this.themeTracker]);
  }
}
