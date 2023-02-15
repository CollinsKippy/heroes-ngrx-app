import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/entities/hero';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HeroItemComponent } from "../hero-item/hero-item.component";

@Component({
  selector: 'app-hero-list',
  standalone: true,
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  imports: [CommonModule, MatCardModule, MatDividerModule, HeroItemComponent]
})
export class HeroListComponent {
  @Input()
  heroes!: Hero[] | null;

  @Output()
  viewDetails = new EventEmitter<Hero>();

  onViewDetails(hero: Hero | null) {
    if (hero)
      this.viewDetails.emit(hero);
  }
}
