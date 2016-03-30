/**
 * Created by fran on 30/03/16.
 */

describe('Personal page', function() {

    browser.get(browser.baseUrl);
    
    it('should contain a top-bar', function() {

        var topbar = element(by.css('.top-bar'));

        expect(topbar).toBeDefined();
    });
    
    describe('top-bar', function(){

        it('should contain title', function(){

            var title_el = element(by.css('.top-bar-title'))
                .element(by.css('.menu-text'))
                .element(by.tagName('strong'))
                .element(by.tagName('a'));
            var title = title_el.getText();

            expect(title).toBe('Francisco Arantes');
        });

    });
    
});