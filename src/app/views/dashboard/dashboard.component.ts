import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from '../../common/service/messageService';
import {LocationService} from '../../common/service/locationService';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  usersList: any[];
  constructor(protected router: Router, protected messageService: MessageService,
              private locationService: LocationService) {
    this.getUserList();
  }


  ngOnInit(): void {

  }

  getUserList() {
    this.locationService.getUserlist().subscribe(res => {
      this.usersList = res.userList;
    })
  }
}
