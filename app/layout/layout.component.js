/**
 * Created by fran on 25/02/16.
 */
System.register(['angular2/core', 'angular2/router', "../angular/angular.component", '../economics/economics.component', '../bio/bio.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, angular_component_1, economics_component_1, bio_component_1;
    var LayoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular_component_1_1) {
                angular_component_1 = angular_component_1_1;
            },
            function (economics_component_1_1) {
                economics_component_1 = economics_component_1_1;
            },
            function (bio_component_1_1) {
                bio_component_1 = bio_component_1_1;
            }],
        execute: function() {
            LayoutComponent = (function () {
                function LayoutComponent() {
                    console.log('loaded Layout');
                }
                LayoutComponent = __decorate([
                    core_1.Component({
                        selector: 'layout',
                        templateUrl: './app/layout/layout.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/economics', name: 'Economics', component: economics_component_1.Economics },
                        { path: '/angular', name: 'Angular', component: angular_component_1.Angular },
                        { path: '/bio', name: 'Bio', component: bio_component_1.Bio, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], LayoutComponent);
                return LayoutComponent;
            }());
            exports_1("LayoutComponent", LayoutComponent);
        }
    }
});
//# sourceMappingURL=layout.component.js.map