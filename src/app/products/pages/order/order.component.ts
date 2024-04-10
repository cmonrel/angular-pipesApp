import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public sortOption: keyof Hero = 'name';

  public toggleUpperCase (): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public sortBy(value: keyof Hero): void {
    this.sortOption = value;
  }
}
