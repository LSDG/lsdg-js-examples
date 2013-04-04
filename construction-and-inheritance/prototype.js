/**
 * Constructor prototypes
 */

// Helpers; ignore this.
var section = console.group || console.log, endSection = console.groupEnd || function(){};


// The constructor function
function SomeObjectType()
{
    this.isOnFire = true;

    this.putOutFire = function putOutFire()
    {
        if(this.isOnFire)
        {
            this.isOnFire = false;
            console.log("The fire on `this` has been put out.");
        }
        else
        {
            console.log("`this` isn't on fire; can't put it out!");
        }
    };
}

SomeObjectType.prototype.checkForFire = function checkForFire()
{
    if(this.isOnFire)
    {
        console.warn("`this` is on fire.");
    }
    else
    {
        console.log("`this` is not on fire.");
    }
};


// Construct some instances of SomeObjectType.
var firstObject = new SomeObjectType();
var secondObject = new SomeObjectType();
var thirdObject = new SomeObjectType();


section("The initial state of the objects");
console.log("firstObject.isOnFire = ", firstObject.isOnFire); // should be true
console.log("secondObject.isOnFire = ", secondObject.isOnFire); // should be true
console.log("thirdObject.isOnFire = ", thirdObject.isOnFire); // should be true
endSection();

section("Checking for fire on firstObject");
firstObject.checkForFire(); // should say "`this` is on fire."
endSection();


section("Putting out the fire on secondObject");
secondObject.putOutFire();
secondObject.checkForFire(); // should say "`this` is not on fire."
endSection();


console.log("Overriding thirdObject.putOutFire...");
thirdObject.putOutFire = function putOutFireOverride()
{
    console.error("You can't tell me what to do!");
};

section("Putting out the fire on thirdObject");
thirdObject.putOutFire();
thirdObject.checkForFire(); // should say "`this` is on fire."
endSection();


// Some other checks:
section("Check what's shared between firstObject and secondObject");
console.log("Are firstObject and secondObject the same object? ",
        firstObject === secondObject); // should be false

console.log("Are firstObject.putOutFire and secondObject.putOutFire the same? ",
        firstObject.putOutFire === secondObject.putOutFire); // should be false

console.log("Are firstObject.checkForFire and secondObject.checkForFire the same? ",
        firstObject.checkForFire === secondObject.checkForFire); // should be true
endSection();
