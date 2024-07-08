import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: false,
})
export class MyComponent {
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <number-card-one></number-card-one>
          <number-card-two></number-card-two>
        </div>
        <number-card></number-card>
      </div>
    );
  }
}
