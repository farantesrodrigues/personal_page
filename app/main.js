/**
 * Created by fran on 19/02/16.
 */
System.register(['angular2/platform/browser', './layout/layout.component', 'angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var browser_1, layout_component_1, core_1, router_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (layout_component_1_1) {
                layout_component_1 = layout_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(layout_component_1.LayoutComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                [core_1.provide(Window, { useValue: window })],
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map