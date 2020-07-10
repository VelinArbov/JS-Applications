const lookupChar = require("./charLookUp.js");

let assert = require("chai").assert;
let expect = require("chai").expect;

describe("lookipChar", function(){
    it(" Return undefined with a non-string first parameter", function(){

        let actual = lookupChar(13, 0);

        assert.equal(actual, undefined, "The function  not return correct result!");

    });
    it("Return undefined with a non-number second parameter", function(){
        expect(lookupChar("axxxaaa", "bbbb")).to.equal(undefined, "The function  not return correct result!");
    });
    
    it("should return undefined with a floating-point number second parameter", function(){
        expect(lookupChar("xxxx", 1.2)).to.equal(undefined, "The function  not return correct result!");
    });

    it("Return incorrect index with an incorrect index value", function(){
        expect(lookupChar("xxxx", 10)).to.equal("Incorrect index", "The function  not return correct result!");
    });
    it("Return incorrect index with negative index value", function(){
        expect(lookupChar("xxxx", -1)).to.equal("Incorrect index", "The function  not return correct result!");
    });
    it("Return incorrect index with an index value equal to string length", function(){
        expect(lookupChar("xxxx", 4)).to.equal("Incorrect index", "The function  not return correct result!");
    });
    it("Return correct value with correct parameters", function(){
        expect(lookupChar("dbca", 1)).to.equal("b", "The function  not return correct result!");
    });
    it("Return correct value with correct parameters", function(){

        expect(lookupChar("Kane", 0)).to.equal("I", "The function  not return correct result!");

    });
})