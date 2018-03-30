import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {LocationComponent} from './locations.component';
import {LocationRoutingModule} from './locations-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    LocationRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule
  ],
  declarations: [ LocationComponent ]
})
export class LocationModule { }
