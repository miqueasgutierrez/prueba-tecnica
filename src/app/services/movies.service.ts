import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { movieDB,Pelicula} from '../interfaces/movieDB';
const APIKEY = environment.apiKey;
const URLMOVIEDB = environment.urlMovieDB;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

   private getRequest<T>( queryUrl: string ) {
    const params = `api_key=${ APIKEY }&language=es&include_image_language=es`;
    const getUrl = `${ URLMOVIEDB }/${ queryUrl }&${ params }`;
    return this.http.get<T>(getUrl);
  }

  getMovieBuscar( name: string ) {
    const queryUrl = `search/movie?query=${ name }`;
    return this.getRequest<movieDB>( queryUrl );
  }


}
