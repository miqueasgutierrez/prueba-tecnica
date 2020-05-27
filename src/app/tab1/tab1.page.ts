import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/movieDB';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  textBuscar = '';
  peliculas: Pelicula[] = [];
  ideasPeliculas = [
    'Joker', 'Spider-man', 'It Capitulo 2', 'Rambo'
  ];
  loading = false;

  constructor(private moviesService: MoviesService,
    private modalCtrl: ModalController) {

  }

  buscar( event ) {
    const value: string = event.detail.value;
    if (value.length === 0) {
      this.loading = false;
      this.peliculas = [];
      return;
    }
    this.loading = true;
    this.moviesService.getMovieBuscar( value )
    .subscribe( response => {
      this.loading = false;
      this.peliculas = response.results;
    });
  }

  buscarPelicula( pelicula: string ) {
    this.textBuscar = pelicula;
    this.loading = true;
  }

  


}
