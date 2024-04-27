import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor {
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
}

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}
