const isOddOrEven = require("./isOddOrEven.js");

let expect = require("chai").expect;
let assert = require("chai").assert;

describe("isOddOrEven function", function(){
    it("Return undefined with a number parameter", function(){
        let actual = isOddOrEven(2);
        assert.equal(actual, undefined);
    });
    it("Return undefined with an object parameter", function(){
        let actual = isOddOrEven({name: "Ivan"});
        assert.equal(actual, undefined);
    });

    it("Return return correct result with an even length", function(){
        expect(isOddOrEven("aaaa")).to.equal("even", "Function did not return the correct result!");
    });
    it("Return return correct result with an odd length", function(){
        expect(isOddOrEven("aaaaa")).to.equal("odd", "Function did not return the correct result!");
    });

    it("Return return correct result with multiple consecutive checks", function(){
        expect(isOddOrEven("xxx")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("zzz")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("test")).to.equal("even", "Function did not return the correct result!");
    });
});