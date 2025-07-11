import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../../shared/games.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-free-games',
  imports: [NgbPaginationModule],
  templateUrl: './free-games.component.html',
  styleUrl: './free-games.component.scss'
})
export class FreeGamesComponent {

  constructor(
    private router: Router,
    private gamesService: GamesService
  ){}
items:any[]=[];
paginatedItems: any[] = []; 

page = 1;
itemsPerPage = 8;
 ngOnInit(): void {
    this.gamesService.getData().subscribe(
      (res) => {
      this.items = res;
      this.updatePaginatedItems(); 
    },
      (err) => console.error(err)
    );
  }
updatePaginatedItems(): void {
  const start = (this.page - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.paginatedItems = this.items.slice(start, end);
}
	selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}
}
