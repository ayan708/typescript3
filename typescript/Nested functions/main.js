// Nested Functions
var r1 = function () {
    return 2 + 2;
};
var r2 = function () {
    return r1();
};
var re = r2();
console.log(re);
