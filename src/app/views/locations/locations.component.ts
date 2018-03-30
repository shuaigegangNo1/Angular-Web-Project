import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from '../../common/service/messageService';
import {LocationService} from '../../common/service/locationService';

@Component({
  templateUrl: 'locations.component.html'
})
export class LocationComponent implements OnInit {
  usersList: any[];
  locationList: any[];
  page  = 0;
  constructor(protected router: Router, protected messageService: MessageService,
              private locationService: LocationService) {
    this.getUserList();
    this.getLocationList()
  }


  ngOnInit(): void {

  }

  getUserList() {
    this.locationService.getUserlist().subscribe(res => {
      this.usersList = res.userList;
    })
  }
  getLocationList() {
    this.locationService.getLocationList(this.page).subscribe(res => {
      this.locationList = res.locationList.content;
      console.log('res>>>>' + JSON.stringify(res.locationList.content))
    })
  }
}
