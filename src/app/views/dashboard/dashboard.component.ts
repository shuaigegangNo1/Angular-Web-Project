import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from '../../common/service/messageService';
import {LocationService} from '../../common/service/locationService';
import {ModalDirective} from 'ngx-bootstrap';
import {RMUserCriteria, User} from '../../common/entity/User';
import {UserService} from '../../common/service/userService';
import {CustomPaginationComponent} from '../pagination/pagination.component';
import {Subject} from 'rxjs/Subject';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent extends CustomPaginationComponent implements OnInit {
  usersList: Array<any>;
  isUpdate: boolean;
  f_user: User;
  newUser: User = new User();
  userCriteria: RMUserCriteria = new RMUserCriteria();
  searchStream = new Subject<RMUserCriteria>();
  @ViewChild('updateModal') public updateModal: ModalDirective;
  @ViewChild('createModal') public createModal: ModalDirective;
  constructor(protected router: Router, protected messageService: MessageService,
              private locationService: LocationService, private userService: UserService) {
    super(router, messageService);
    this.getUserList();
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.searchStream
        .debounceTime(300)
        .switchMap(() => this.locationService.getUserlist(this.userCriteria)).subscribe(
        (res) => {
          console.log("res>>>>"+JSON.stringify(res))
          this.usersList = res.result.content;
          this.totalItems[0] = res.result.totalElements;
          this.resetMaxSize(this.currentTab, this.userCriteria);
        }
    );
  }

  getUserList() {
    this.locationService.getUserlist(this.userCriteria).subscribe(res => {
      this.usersList = res.result.content;
      this.totalItems[0] = res.result.totalElements;
      this.resetMaxSize(this.currentTab, this.userCriteria);
    })
  }
  update(user: any) {
    this.f_user = user;
    this.isUpdate = true;
    this.updateModal.show();
  }
  submitUser() {
    if (this.isUpdate) {
      this.userService.update(this.f_user).subscribe(res => console.log('>>>>res>>>>' + JSON.stringify(res)))
      this.updateModal.hide();
      this.messageService.pushMessage({title: 'Success', content: '用户修改成功', type: 'success'});
    } else {
      this.userService.create(this.newUser).subscribe(
        res => {
          this.updateModal.hide();
          // this.messageService.pushMessage({title: 'Success', content: '用户创建成功', type: 'success'});
          window.location.reload();
        })

    }
  }
  create() {
  this.isUpdate = false;
  this.updateModal.show();
  }
  delete(id: number) {
    this.userService.delete(id).subscribe(res => {})
  }
  pageChanged(event: any) {
    // this.userCriteria.skip = (event.page - 1) * this.userCriteria.pagesize;
    this.userCriteria.skip = event.page - 1
    this.searchStream.next(this.userCriteria);
  }
}
