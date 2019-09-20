import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
    info: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
      this.getQuantidadePokemon();
  }

    getQuantidadePokemon() {
        this.api.http('?offset=20&limit=20').subscribe(data => {
            console.log(data.results);
            for (let i = 0; i < data.results.length; i++) {
                console.log(data.results[i].name);
            }
        });
    }

}
