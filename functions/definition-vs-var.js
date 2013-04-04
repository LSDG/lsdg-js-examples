/**
 * Interaction of function declarations and variables
 */


// Displays "someFunc declaration" (no, this is not a copy/paste error!)
someFunc();

// A function definition
function someFunc()
{
    console.log("someFunc declaration");
}


// Displays "someFunc declaration"
someFunc();

var someFunc;

// ...still displays "someFunc declaration"
someFunc();


someFunc = undefined;

try
{
    someFunc(); // This one will fail
}
catch(error)
{
    console.error(error.stack);
    // TypeError: undefined is not a function
    //     at Object.<anonymous> (.../lsdg-js-examples/functions/definition-vs-var.js:29:5)
}


// An anonymous function expression, assigned to the variable
someFunc = function()
{
    console.log("someFunc expression");
}

// Displays "someFunc expression"
someFunc();


/**
 * Explanation:
 *
 * Function definitions and variable declarations get parsed before any other statements in a given scope are executed.
 * Therefore, the function from the someFunc declaration is available _before_ the first someFunc() call.
 *
 * Variables declared with the same name as functions don't override the function until they've been assigned a value.
 * (even if that value is still 'undefined')
 *
 * Once we've assigned a value to the variable someFunc, that value overrides the original definition of the function
 * someFunc. Until it has a value, though, JS will still give us the original function.
 */
