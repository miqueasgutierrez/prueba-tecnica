import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URLIMAGE = environment.urlImage;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(image: string, isAvata: boolean = false, size: string = 'w500'): any {
    if ( !image && !isAvata ) {
      return './assets/no-image-banner.jpg';
    }
    if ( !image && isAvata ) {
      return './assets/no-avatar.jpg';
    }
    const imgUrl = `${ URLIMAGE }/${ size }${ image }`;
    return imgUrl;
  }

}