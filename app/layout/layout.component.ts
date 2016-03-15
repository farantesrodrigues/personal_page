/**
 * Created by fran on 25/02/16.
 */

import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {Angular} from "../angular/angular.component";
import {Economics} from '../economics/economics.component';
import {Bio} from '../bio/bio.component';

@Component({
    selector: 'layout',
    templateUrl: './app/layout/layout.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path:'/economics', name: 'Economics', component: Economics},
    {path:'/angular',   name: 'Angular',   component: Angular},
    {path:'/bio',       name: 'Bio',       component: Bio, useAsDefault: true}
])
export class LayoutComponent {
    constructor() {
        console.log('loaded Layout');
    }
}