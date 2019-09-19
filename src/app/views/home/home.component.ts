import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    info: any[];

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.getQuantidadePokemon();
    }

    getQuantidadePokemon() {
        this.api.http('?offset=20&limit=20').subscribe(data => {
            this.info = data.results;
            console.log(this.info);
            for (let i = 0; i < this.info.length; i++) {
                console.log(this.info[i].name);
            }
        });
    }

}
