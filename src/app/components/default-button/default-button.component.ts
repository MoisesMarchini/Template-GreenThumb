import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  template: `<ng-container *ngIf="routerLink; else buttonTemplate">
      <a
        [routerLink]="routerLink"
        [target]="target"
        [class]="
          'flex text-sm items-center justify-center content-center w-full gap-2 btn btn-' +
          btnClass()
        "
      >
        <ng-content></ng-content>
        <i *ngIf="!!fontawesomeIcon" [class]="fontawesomeIcon"></i>
        <span
          *ngIf="!!label"
          [class]="hideLabelOnMobile ? 'd-none d-md-inline' : ''"
        >
          {{ label }}
        </span>
      </a>
    </ng-container>
    <ng-template #buttonTemplate>
      <button
        [type]="type"
        [disabled]="disabled"
        (click)="onClick()"
        [class]="
          'flex text-sm items-center justify-center content-center w-full gap-2 btn btn-' +
          btnClass()
        "
      >
        <ng-content></ng-content>
        <i *ngIf="!!fontawesomeIcon" [class]="fontawesomeIcon"></i>
        <span
          *ngIf="!!label"
          [class]="hideLabelOnMobile ? 'd-none d-md-inline' : ''"
        >
          {{ label }}
        </span>
      </button>
    </ng-template>`,
  styleUrl: './default-button.component.scss',
})
export class DefaultButtonComponent {
  @Input() label: string = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() fontawesomeIcon: string = '';
  @Input() outline: boolean = false;
  @Input() btnColor: string = 'primary';
  @Input() customClass: string = '';
  @Input() disabled: boolean = false;
  @Input() hideLabelOnMobile: boolean = false;
  @Input() routerLink?: string;
  @Input() target: '_self' | '_blank' = '_self';
  @Output() _onClick: EventEmitter<any> = new EventEmitter<any>();

  btnClass() {
    return (
      (this.outline ? 'outline-' : '') + this.btnColor + ' ' + this.customClass
    );
  }

  onClick() {
    this._onClick.emit();
  }
}
