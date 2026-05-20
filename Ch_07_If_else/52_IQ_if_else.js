if ("hello") console.log("This will be printed because non-empty strings are truthy.");

if (42) console.log("This will also be printed because non-zero numbers are truthy.");

if (0) console.log("This will NOT be printed because 0 is falsy.");

if ("") console.log("This will NOT be printed because an empty string is falsy.");

if (null) console.log("This will NOT be printed because null is falsy.");
if (undefined) console.log("This will NOT be printed because undefined is falsy.");
if ({}) console.log("This will be printed because an empty object is truthy.");
if ([]) console.log("This will be printed because an empty array is truthy.");
if (NaN) console.log("This will NOT be printed because NaN is falsy.");  
