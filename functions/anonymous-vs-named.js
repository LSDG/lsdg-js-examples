/**
 * Anonymous function expressions vs. named function expressions
 */


// Using an anonymous function expression
try
{
    [1].forEach(function()
    {
        throw new Error("in anonymous function expression");
    });
}
catch(error)
{
    console.error('Expected error "' + error.message + '":');
    console.log(error.stack);
    // Expected error "in anonymous function expression":
    // Error: in anonymous function expression
    //     at someFuncNamed (.../lsdg-js-examples/functions/anonymous-vs-named.js:11:15)
}


// Using a named function expression
try
{
    [1].forEach(function someFuncNamed()
    {
        throw new Error("in named function expression");
    });
}
catch(error)
{
    console.error('Expected error "' + error.message + '":');
    console.log(error.stack);
    // Expected error "in named function expression":
    // Error: in named function expression
    //     at someFuncNamed (.../lsdg-js-examples/functions/anonymous-vs-named.js:29:15)
}


/**
 * Note: This is not an issue if you're assigning the anonymous function expression to a variable first;
 * in this case, the name of the variable will be used as the function name when printing the stack:
 */
try
{
    var someFuncNamed = function()
    {
        throw new Error("in anonymous function expression assigned to a variable");
    };
    [1].forEach(someFuncNamed);
}
catch(error)
{
    console.error('Expected error "' + error.message + '":');
    console.log(error.stack);
    // Expected error "in anonymous function expression assigned to a variable":
    // Error: in anonymous function expression assigned to a variable
    //     at someFuncNamed (.../lsdg-js-examples/functions/anonymous-vs-named.js:50:15)
}
