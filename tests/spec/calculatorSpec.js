define(['app/module1/calculator'], function (calculator) {

    describe("Calculator Specs", function () {

        describe("Add Numbers", function () {
            it("When Adding 5+ 5 Should return 10", function () {
                expect(10).toBe(calculator.add(5,5));
            });
        });

        describe("Divide Numbers", function () {
            it("When Dividing  50 / 5 Should return 10", function () {
                expect(10).toBe(calculator.divide(50, 5));
            });
        });

        
    });
});