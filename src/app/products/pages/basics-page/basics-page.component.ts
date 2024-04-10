import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'carlos';
  public nameUpper: string = 'CARLOS';
  public fullName: string = 'caRLoS mOnsERraT'

  public customDate: Date = new Date();

}
