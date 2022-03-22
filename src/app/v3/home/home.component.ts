import { Component, OnInit } from '@angular/core';
import { from, of, range } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { ReaderService } from 'src/app/service/markdown/reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public value: number = 0;
  public loader: boolean = true;
  public data: string = '';

  constructor(private markdown: ReaderService) { }

  ngOnInit(): void {
    this.markdown.getMarkdown().subscribe(data => {
      this.data = data;
    });
    const obs = {
      observer: this,
      next(x) {
        this.observer.value = x;
      },
      complete() {
        this.observer.loader = false;
      }
    }
    from(range(1, 100)).pipe(
      concatMap(val => of(val).pipe(delay(55)))
    ).subscribe(obs);
  }

  public imgSrc: any = 'assets/IN-white.svg';

}