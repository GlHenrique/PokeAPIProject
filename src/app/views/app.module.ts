import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ListPokemonModule } from './list-pokemon/list-pokemon.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ListPokemonModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
