import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any[]): string {

    if (!value) {
      return 'assets/img/noimage.png';
      
    }
    if (value.length > 0) {
      return value[0].url;
      
    }else{

      return 'assets/img/noimage.png';
    }

  }

}
