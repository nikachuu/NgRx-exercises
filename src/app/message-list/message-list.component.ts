import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('messages').subscribe(value => {
      console.log(value);
      this.messages = value.messages;
    });
  }

  apagar(messageId) {
    this.store.dispatch({
      type: 'DELETE_MESSAGE',
      payload: messageId
    });
  }

}
