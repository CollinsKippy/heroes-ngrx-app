import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-hero-toggle-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './hero-toggle-button.component.html',
  styleUrls: ['./hero-toggle-button.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '50px',
        backgroundColor: '#ebffac'
      })),
      state('closed', style({
        left: '4px',
        backgroundColor: '#ffffeb'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])

    ])
  ]
})
export class HeroToggleButtonComponent {
  @Input() isActive: boolean | undefined;

  @Output() toggled = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  onToggle() {
    this.isActive = !this.isActive;
    this.toggled.emit(this.isActive);
  }
}
