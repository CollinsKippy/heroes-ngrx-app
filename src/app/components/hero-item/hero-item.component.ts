import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Hero } from 'src/app/entities/hero';
import { MatButtonModule } from '@angular/material/button';
import { PowerHighlighterDirective } from 'src/app/directives/power-highlighter.directive';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule, PowerHighlighterDirective],
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
}
