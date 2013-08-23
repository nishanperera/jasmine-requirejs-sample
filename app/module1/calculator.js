define([], function () {

    var add = function (a, b) {
        return a + b;
    },
    divide = function (a, b) {
        return Math.floor(a / b); 
    };
    
    return {
        add: add,
        divide: divide
    };
});