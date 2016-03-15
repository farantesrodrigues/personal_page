/**
 * Created by fran on 07/03/16.
 */

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Configs} from '../../configs';
import {Observable} from 'rxjs/Observable';
import {RawData} from "./multiline-graph-data";

@Injectable()
export class PikettyDataService {

    constructor (private http: Http) {
        console.log('loaded PikettyDataService')
    }

    // private _pikettyUrl = "https://www.quandl.com/api/v3/datasets/PIKETTY/T10_3.json?auth_token="+ Configs.QUANDL_API_KEY;
    private _pikettyUrl = "./app/economics/graph/mock_data.json";

    getData() {
        return this.http.get(this._pikettyUrl)
            .map(res => <RawData> res.json().dataset.data)
            // .do(data => console.log('Piketty Data Service : data received from API ', data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}