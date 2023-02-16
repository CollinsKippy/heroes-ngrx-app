import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Hero } from 'src/app/entities/hero';
import { MatButtonModule } from '@angular/material/button';
import { PowerHighlighterDirective } from 'src/app/directives/power-highlighter.directive';
import { HeroToggleButtonComponent } from '../hero-toggle-button/hero-toggle-button.component';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule,
    MatCardModule, MatDividerModule, MatButtonModule,
    HeroToggleButtonComponent, PowerHighlighterDirective],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  @Input()
  hero!: Hero | null;

  @Output()
  viewDetails = new EventEmitter<Hero>();

  onViewDetails(hero: Hero | null) {
    if (hero)
      this.viewDetails.emit(hero);
  }

  onToggle(isActive: boolean, hero: Hero | null) {
    if (hero) {
      hero.isActive = isActive;
      console.log(hero);
    }
  }
}
