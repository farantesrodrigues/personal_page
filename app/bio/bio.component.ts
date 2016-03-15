/**
 * Created by fran on 10/03/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'bio',
    templateUrl: './app/bio/bio.html'
})

export class Bio {
    constructor() {
        console.log('loaded Bio');
    }
}