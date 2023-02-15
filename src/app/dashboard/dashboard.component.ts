import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../entities/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]> | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroService.heroes$;
  }

  onViewDetails(hero: Hero | null) {
    if (hero) {
      // TODO: Navigate to detail section;
      console.log({ hero });
    }
  }
}
