/**
 * Created by fran on 30/03/16.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:' + (process.env.PORT || '8000'),
    specs: [
        './app/**/*e2e.js'
    ],
    framework: 'jasmine2',
    useAllAngular2AppRoots: true
};