import { Component, EventEmitter, Event, Host, Prop, State, h } from '@stencil/core';
import { Validator, Validators, getValidator } from './validator';

@Component({
  tag: 'string-input',
  shadow: false,
})
export class StringInput {
  @Prop() validators: Validators;

  @State() value: string = '';
  @State() _validator: Validator;
  @State() state: string = 'normal';

  @Event() valueChanged: EventEmitter<string>;

  componentWillLoad() {
    this._validator = getValidator(this.validators);
  }

  onBlur = async (event: Event): Promise<void> => {
    const value = (event.target as HTMLInputElement).value;
    this.runValidators(value);
  };

  private runValidators(value: string): boolean {
    if (!this._validator.validate(value)) {
      this.state = 'error';
      return false;
    } else {
      this.state = 'normal';
      return true;
    }
  }

  render() {
    return (
      <Host>
        Nome:
        <input
          type="text"
          onBlur={event => this.onBlur(event)}
          value={this.value}
          style={{ margin: '4px', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {this.state === 'error' && <div style={{ color: '#b71c1c' }}>{this._validator.errorMessage}</div>}
      </Host>
    );
  }
}
