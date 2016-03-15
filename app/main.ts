/**
 * Created by fran on 19/02/16.
 */

import {bootstrap} from 'angular2/platform/browser'
import {LayoutComponent} from './layout/layout.component'
import {enableProdMode, provide} from 'angular2/core';
import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

enableProdMode();

bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    [provide(Window, {useValue: window})],
    HTTP_PROVIDERS
]);