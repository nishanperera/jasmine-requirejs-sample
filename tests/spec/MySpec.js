define(['../../../app/module1/calculator'], function (calc) {

    describe("MySpec", function () {
            it("Should be true", function () {
                expect(true).toBeTruthy();
            });

            it("Should be 10", function () {
                expect(10).toBe(calc.add(5,5));
            });
    });

});