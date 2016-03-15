/**
 * Created by fran on 10/03/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'angular',
    templateUrl: './app/angular/angular.html'
})

export class Angular {
    constructor() {
        console.log('loaded Angular');
    }
}