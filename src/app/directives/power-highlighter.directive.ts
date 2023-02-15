import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import {
  coerceBooleanProperty,
  BooleanInput,
  NumberInput,
  coerceNumberProperty,
  coerceElement,
} from '@angular/cdk/coercion';

/**
 * Card Changes Color with >90 power level
 */
@Directive({
  selector: '[appPowerHighlighter]',
  standalone: true
})
export class PowerHighlighterDirective {
  private _powerLevel = 0;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @Input()
  set appPowerHighlighter(powerLevel: NumberInput) {
    this._powerLevel = coerceNumberProperty(powerLevel, 0);

    if (this._powerLevel >= 90) {
      // Change Card Color
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#f2fbd6');
    }
  }
}
