import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Observer, Subscription, interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  myNumbers: Subscription;
  customObservable: Subscription;

  constructor() { }

  ngOnInit() {
    const numbersExample = interval(1000)
      .pipe(map(
        (data: number) => {
          return data * 2;
        }
      ));
    this.myNumbers = numbersExample.subscribe((number: number) => {
      console.log(number);
    });
    // const exampleObservable = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     // observer.error('no workie');
    //     observer.complete();
    //   }, 5000);
    // });
    // this.customObservable = exampleObservable.subscribe(
    //   (data: string) => { console.log(data); },
    //   (error: string) => { console.log(error); },
    //   () => { console.log('complete'); }
    // );
  }

  ngOnDestroy() {
    this.myNumbers.unsubscribe();
    // this.customObservable.unsubscribe();
  }

}
