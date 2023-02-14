import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export type NavigationLink = {
  name: string;
  route: string;
};

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() navigationLinks: NavigationLink[] | undefined = [];
  @Input() appName: string | undefined;
}
