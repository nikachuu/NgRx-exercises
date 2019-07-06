import { messagesReducer } from './store/messages.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageListComponent } from './message-list/message-list.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MessageListComponent,
    AddMessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      messages: messagesReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
