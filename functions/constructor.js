/**
 * Functions as constructors
 */


// A constructor function
function SomeObjectType()
{
    console.log("Constructing a SomeObjectType.");

    console.log("this = ", this);
    this.isOnFire = true;
}


// Constructing a new instance of SomeObjectType
var correctObj = new SomeObjectType();

// Not constructing a new instance! (instead, `this` will be `window`, or in Node.js, the `module` object!)
var incorrectObj = SomeObjectType();
