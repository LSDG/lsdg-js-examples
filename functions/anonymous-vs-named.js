/**
 * Anonymous function expressions vs. named function expressions
 */


// Using an anonymous function expression
try
{
    [1].forEach(function()
    {
        throw new Error("Error in anonymous function expression!");
    });
}
catch(error)
{
    console.error(error.stack);
    // Error: Error in anonymous function expression!
    //     at .../lsdg-js-examples/functions/error.js:5:15
}


// Using a named function expression
try
{
    [1].forEach(function someFuncNamed()
    {
        throw new Error("Error in named function expression!");
    });
}
catch(error)
{
    console.error(error.stack);
    // Error: Error in named function expression!
    //    at someFuncNamed (.../lsdg-js-examples/functions/error.js:22:15)
}


/**
 * Note: This is not an issue if you're assigning the anonymous function expression to a variable first;
 * in this case, the name of the variable will be used as the function name in the stack:
 */
try
{
    var someFuncNamed = function()
    {
        throw new Error("Error in anonymous function expression assigned to a variable!");
    };
    [1].forEach(someFuncNamed);
}
catch(error)
{
    console.error(error.stack);
    // Error: Error in anonymous function expression assigned to a variable!
    //    at someFuncNamed (.../lsdg-js-examples/functions/error.js:43:15)
}
