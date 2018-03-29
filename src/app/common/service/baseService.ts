/**
 * Created by huangxuewen on 2018/3/29.
 */
import {Observable} from 'rxjs/Rx';
import {RequestOptions, Headers} from '@angular/http';
export abstract class BaseService {
    constructor() {
    }
    protected handleError(error) {
        let errorMessage = error.json().message;
        if (error.json().error) {
            errorMessage += ':' + error.json().error;
        }
        // let alert = this.alertCtrl.create(
        //   {
        //     title: '网络异常',
        //     subTitle: '正在抢救中...',
        //     buttons: ['确认']
        //   });
        // alert.present();
        switch (error.status) {
            case 401:
                return Observable.throw('invalid token');
            default:
                return Observable.throw(errorMessage);
        }
    }

    protected getJsonHeaderWithoutJWT() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({headers: headers});
        // let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
        return options;
    }

    protected getJsonHeaderWithJWT() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const token = localStorage.getItem('token');
        // headers.append('Authorization",'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoeHcxIiwiaWF0IjoxNTE4NDA2ODczLCJleHAiOjE1MTkyNzA4NzN9.uvIxAjjWiW18dxBSX5ur0MF9yqDqfWd-5dreMhiK1aPaEQfJOHTXlg722tQLvgcIu07IfPNFyV6yULD7TjTo4Q")
        headers.append('Authorization', 'Bearer ' + token)
        const options = new RequestOptions({headers: headers});
        return options;
    }

}
