import { Component, Host, h } from '@stencil/core';
import { EventService } from './event.service';

@Component({
  tag: 'number-card',
  shadow: false,
})
export class NumberCard {
  private eventService: EventService;

  componentWillLoad() {
    this.eventService = EventService.getInstance();
  }

  handleClick() {
    this.eventService.dispatchEvent({
      data: Math.floor(Math.random() * 100),
    });
  }

  render() {
    return (
      <Host>
        <button
          style={{
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            fontSize: '26px',
            margin: '16px 2px',
            borderRadius: '8px',
          }}
          onClick={() => this.handleClick()}
        >
          Gerar número
        </button>
      </Host>
    );
  }
}
