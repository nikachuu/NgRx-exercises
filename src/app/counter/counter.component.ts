import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // sem async pipe counter = 0;
  counter$: Observable<number>;
  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
    // this.store.select('counter').subscribe(value => {
    //   this.counter = value;
    // });
  }

  incrementCounter() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }

  decrementCounter() {
    this.store.dispatch({
      type: 'DECREMENT'
    });
  }
}
