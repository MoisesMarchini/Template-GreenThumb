import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectOption } from '../input-select/input-select.component';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
  ],
})
export class InputRadioComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() options: SelectOption[] = [];
  @Input() name: string = '';
  @Input() label: string = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  private _value: any;
  get value() {
    return this._value;
  }
  set value(val: any) {
    val ||= typeof val === 'number' ? 0 : '';

    this._value = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onRadioChange(option: any): void {
    this.value = option;
    this.onChange(option);
    this.onTouch();
  }
}
