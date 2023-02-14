import { Component } from '@angular/core';
import { NavigationLink } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigationLinks: NavigationLink[] = [
    { name: 'Dashboard', route: '/' },
    { name: 'Heroes', route: '/heroes' },
  ];
  appName: string = 'Perforce';
  title = 'heroes-ngrx-app';
}
