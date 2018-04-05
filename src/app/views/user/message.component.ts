/**
 * Created by huangxuewen on 2018/4/2.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'message.component.html'
})
export class MessageComponent {

    constructor(protected router: Router) { }
    jump() {
        this.router.navigate(['/user']);
    }
}
