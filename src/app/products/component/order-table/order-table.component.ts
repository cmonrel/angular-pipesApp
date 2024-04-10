import { Component, Input } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-table',
  templateUrl: './order-table.component.html',
  styles: ``
})
export class OrderTableComponent {

  @Input()
  public sort: keyof Hero = 'name';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green Lintern',
      canFly: true,
      color: Color.green,
    },
  ];
}
