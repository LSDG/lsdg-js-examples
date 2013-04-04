/**
 * Functions as objects
 */


// A function definition
function someFunc()
{
    console.log("someFunc declaration");
}


function sortsBefore(item1, item2)
{
    console.log("sortsBefore called with arguments ", arguments, " by ", sortsBefore.caller.name);
    return (item1 < item2);
}


function quickSort(array, compare)
{
    if(array.length == 0)
    {
        return [];
    }

    console.group && console.group("quickSort(", array, ")");
    console.log("Sorting with function ", compare.name);

    var left = [];
    var right = [];
    var pivot = array[0];

    for(var index = 1; index < array.length; index++)
    {
        if(compare(array[index], pivot))
        {
            left.push(array[index]);
        }
        else
        {
            right.push(array[index]);
        }
    }

    var sorted = quickSort(left, compare).concat(pivot, quickSort(right, compare));

    console.groupEnd && console.groupEnd();

    return sorted;
}


console.log(quickSort.name, " takes ", quickSort.length, " arguments.");
console.log("Source of sortsBefore: ", sortsBefore.toString());

var unsorted = [2, 4, 5, 3, 1];
console.log("Unsorted array: ", unsorted);

var sorted = quickSort(unsorted, sortsBefore);
console.log("Sorted array: ", sorted);
