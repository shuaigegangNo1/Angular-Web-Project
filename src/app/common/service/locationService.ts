/**
 * Created by huangxuewen on 2018/3/29.
 */
import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import {BaseService} from './baseService';
import {RMUserCriteria} from '../entity/User';
@Injectable()
export class LocationService extends BaseService {

    constructor(private http: Http) {
        super()
    }
    getServiceUrl() {
        return 'http://localhost:8080';
    }
    getUserlist(userCritera: RMUserCriteria) {
        return this.http.post(this.getServiceUrl() + '/user/querylist?page=' + userCritera.skip , JSON.stringify(userCritera) , this.getJsonHeaderWithJWT())
            .map(res => res.json()).catch(this.handleError);
    }
    getLocationList(page: number) {
        return this.http.get(this.getServiceUrl() + '/location/list?page=' + page, this.getJsonHeaderWithJWT())
            .map(res => res.json()).catch(this.handleError);
    }
}
