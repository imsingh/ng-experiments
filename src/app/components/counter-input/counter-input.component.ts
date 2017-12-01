import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CounterInputComponent ),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
  _counterValue: number = 0;
  propagate = (_:any) => {};
  constructor() { }

  increment() { this.counterValue++ };
  decrement() { this.counterValue-- };

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(value) {
    this._counterValue = value;
    this.propagate(this._counterValue);
  }

  writeValue(value:any) {
    if(value !== null && value !== '') {
      console.log(value);
      this.counterValue = value;
    }
  }

  registerOnChange(fn:any) {
    this.propagate = fn;
  }

  registerOnTouched(fn:any) {}
  setDisabledState(state: Boolean) {}

}
