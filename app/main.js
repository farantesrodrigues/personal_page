/**
 * Created by fran on 19/02/16.
 */
System.register(['angular2/platform/browser', './layout/layout.component'], function(exports_1) {
    var browser_1, layout_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (layout_component_1_1) {
                layout_component_1 = layout_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(layout_component_1.LayoutComponent);
        }
    }
});
//# sourceMappingURL=main.js.map