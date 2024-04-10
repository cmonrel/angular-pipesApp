import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): unknown {
    return ((value == 0) ? 'red' : (value == 1) ? 'black' : (value == 2) ? 'blue' : (value == 3) ? 'green' : '');
  }

}
