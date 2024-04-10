import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderTableComponent } from './component/order-table/order-table.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    OrderTableComponent,
    UncommonPageComponent,

    //Pipes
    CanFlyPipe,
    ColorPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class ProductsModule { }
