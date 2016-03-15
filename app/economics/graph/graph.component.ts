/**
 * Created by fran on 07/03/16.
 */

/**
 * Graph component. A directive that implements ngOnInit class to render graph on initialization.
 * @namespace Graph
 */

import {Directive, ElementRef, Inject, Attribute, OnInit} from 'angular2/core';
import {PikettyDataService} from './piketty-data.service';
import {HTTP_PROVIDERS} from 'angular2/http';

import {create_canvas, renderMultiline, parse_data} from './multiline-graph'
import {MultilineGraphData, RawData} from "./multiline-graph-data";


@Directive({
    selector: 'graph',
    properties: [ 'data' ],
    providers: [HTTP_PROVIDERS, PikettyDataService]
})
/**
 * Graph directive : draws the d3 (svg) graph in the element associated to the directive (graph).
 * @class
 * @memberof Graph
 */
export class Graph implements OnInit {
    errorMessage: string;
    raw_data: RawData;
    parsed_data: MultilineGraphData;
    graph: any;

    constructor(
        /**
         * pikettyDataService. Use the PikettyDataService to fetch data from the API (Quandl)
         * @private
         * @memberof Graph
         */
        private pikettyDataService: PikettyDataService,
        /**
         * element. Use the ElementRef, the element representing the directive to attach the graph to.
         * @private
         * @memberof Graph
         */
        private element: ElementRef,
        /**
         * window. Use the window object to compute graph canvas size.
         * @private
         * @memberof Graph
         */
        private window: Window
    ){
        console.log('loaded Graph');
    }

    ngOnInit() {
        /**
         * On directive initialization, subscribe to the data observable and once all data is returned, create the graph
         * @method
         * @memberof Graph
         */
        this.pikettyDataService.getData()
            .subscribe(
                data => this.raw_data = data,
                error =>  this.errorMessage = <any>error,
                () => {
                    this.parsed_data = parse_data(this.raw_data);
                    this.graph = create_canvas(this.element, this.window.innerWidth);
                    console.log(this.window.innerWidth);
                    renderMultiline(this.graph, this.parsed_data, this.window.innerWidth);
                })
    }
}