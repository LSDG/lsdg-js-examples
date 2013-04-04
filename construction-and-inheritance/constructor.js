/**
 * Functions as constructors
 */

// Helpers; ignore this.
var section = console.group || console.log, endSection = console.groupEnd || function(){};


// A constructor function
function SomeObjectType()
{
    console.log("this = ", this);
    this.isOnFire = true;

    // NOTE: Constructors do NOT return anything. (it would be ignored anyway)
}


section("Constructing a SomeObjectType correctly");

// Constructing a new instance of SomeObjectType
var correctObj = new SomeObjectType();
console.log("correctObj = ", correctObj);

endSection();


section("Constructing a SomeObjectType incorrectly");

// Not constructing a new instance! (instead, `this` will be `window`, or in Node.js, the `module` object!)
var incorrectObj = SomeObjectType();
console.log("incorrectObj = ", incorrectObj);

endSection();
