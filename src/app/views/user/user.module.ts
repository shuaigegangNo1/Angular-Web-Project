import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './user.component';
import { DashboardRoutingModule } from './user-routing.module';
import {CommonModule} from '@angular/common';
import {ModalModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageComponent} from './message.component';
import {UserDetailComponent} from './user.detail.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [ DashboardComponent, UserDetailComponent, MessageComponent ]
})
export class UserModule { }
