import { Component, Host, State, h } from '@stencil/core';
import { EventService } from './event.service';
import { Subscription } from 'rxjs';

@Component({
  tag: 'number-card-one',
  shadow: false,
})
export class NumberCardOne {
  private eventServiceSubscription: Subscription;

  @State() newNumber: number = 1;

  componentWillLoad() {
    this.eventServiceSubscription = EventService.getInstance()
      .observeEvent()
      .subscribe(event => {
        this.newNumber = event.data;
      });
  }

  disconnectedCallback() {
    this.eventServiceSubscription.unsubscribe();
  }

  render() {
    return (
      <Host>
        Card 1
        <div
          style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            fontSize: '300px',
            margin: '10px',
          }}
        >
          {this.newNumber}
        </div>
      </Host>
    );
  }
}
