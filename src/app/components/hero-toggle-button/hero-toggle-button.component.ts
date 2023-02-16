import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-toggle-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './hero-toggle-button.component.html',
  styleUrls: ['./hero-toggle-button.component.scss']
})
export class HeroToggleButtonComponent {

}
