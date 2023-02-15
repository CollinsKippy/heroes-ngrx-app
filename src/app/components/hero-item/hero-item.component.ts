import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Hero } from 'src/app/entities/hero';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  @Input()
  hero!: Hero | null;
}
