import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../service/markdown/reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = `##### 10th May 2020
  Great Day for testing stuffs
  `

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
