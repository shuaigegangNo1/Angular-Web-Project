import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {UserDetailComponent} from './user.detail.component';
import {MessageComponent} from './message.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'detail',
    component: UserDetailComponent,
    data: {
      title: 'UserDetail'
    }
  },
  {
    path: 'message',
    component: MessageComponent,
    data: {
      title: 'Message'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
