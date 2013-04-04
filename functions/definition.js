/**
 * Different ways to declare functions in JavaScript
 */


// A function definition
function functionDefinition(value)
{
    console.log("functionDefinition (value: %s)", value);
}


// An anonymous function expression, assigned to a variable
var functionExpression = function(value)
{
    console.log("functionExpression (value: %s)", value);
};


// An anonymous function expression, returned from a factory function
function createFunction(value1)
{
    return function(value2)
    {
        console.log("Function expression created by createFunction (value1: %s; value2: %s)", value1, value2);
    };
}



// Displays "functionDefinition (value: some value)"
functionDefinition("some value");


// Displays "functionExpression (value: some other value)"
functionExpression("some other value");


var thirdFunc = createFunction("and now for");

// Displays "Function expression created by createFunction (value1: and now for; value2: something completely different)"
thirdFunc("something completely different");
