require.config({
    paths: {
        "domReady": "../app/lib/domReady",
        "jasmine": "lib/jasmine-1.3.1/jasmine",
        "jasmine-html": "lib/jasmine-1.3.1/jasmine-html",
        app:"../../../app",
        spec: "spec/"
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(['domReady!', 'jasmine-html'], function (document, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/MySpec');
    specs.push('spec/calculatorSpec');
    specs.push('spec/calculatorMockSpec');

    require(specs, function (spec) {
            jasmineEnv.execute();
        });
    
});
