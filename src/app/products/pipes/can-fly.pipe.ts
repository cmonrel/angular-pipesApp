import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFly'
})

export class CanFlyPipe implements PipeTransform {
  public response: string = '';

  transform(value: boolean): string {
    return value ? this.response = 'Can fly' : this.response = 'Can\'t fly'
  }
}
