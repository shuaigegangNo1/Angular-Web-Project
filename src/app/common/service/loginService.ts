/**
 * Created by huangxuewen on 2018/3/29.
 */
import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import {BaseService} from './baseService';
@Injectable()
export class LoginService extends BaseService {

    constructor(private http: Http) {
        super()
    }
    getServiceUrl() {
        return 'http://localhost:8080';
    }
    login(user: any) {
        return this.http.post(this.getServiceUrl() + '/login', JSON.stringify(user), this.getJsonHeaderWithoutJWT())
            .map(res => res.json()).catch(this.handleError)
    }
}