import { Component, Host, h } from '@stencil/core';
import { Validators } from './validator';

@Component({
  tag: 'my-form',
  shadow: false,
})
export class MyForm {
  render() {
    return (
      <Host>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <string-input validators={Validators.required}></string-input>
          <date-input validators={Validators.date}></date-input>
        </form>
      </Host>
    );
  }
}
