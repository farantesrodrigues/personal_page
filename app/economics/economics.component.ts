/**
 * Created by fran on 10/03/16.
 */

import {Component} from 'angular2/core';
import {Graph} from './graph/graph.component';

@Component({
    selector: 'economics',
    templateUrl: './app/economics/economics.html',
    directives: [Graph]
})
export class Economics {
    constructor() {
        console.log('loaded Economics');
    }
}