import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-default-input',
  template: `<input
  type="text"
  class="text-sm px-3 py-2 h-100 border border-black"
  [attr.placeholder]="placeholder"
  [(ngModel)]="value"
/>
`,
  styleUrl: './default-input.component.scss',
  host: {
    class: 'grid'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultInputComponent),
      multi: true,
    },
  ],
})
export class DefaultInputComponent implements ControlValueAccessor{
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';

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
