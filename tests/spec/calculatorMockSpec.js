define(['app/module1/calculator'], function (calculator) {

    describe("Calculator Mock Specs", function () {

        describe("Add Numbers", function () {
            it("When Adding 5+ 5 Should return 10", function () {
                //var spyAdd = spyOn(calculator, "add").andReturn(10);
                //expect(10).toBe(spyAdd.add(5, 5));
            });
        });

    });
});