import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    info: any[];
    openPokemons: boolean;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
    }



}
