import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../service/markdown/reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  onLoad($event) {
    console.log($event)
  }
  onError($event) {
    console.log($event)
  }
}
