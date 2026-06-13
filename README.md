# Testing Academy Playwright Learning

This repository contains my learning journey for JavaScript fundamentals and Playwright testing. It includes practical examples, exercises, and reference materials organized by chapters.

## Repository Structure

```
TestingAcademyPlaywrightLearning/
├── Ch_01_Javascript_Basics/    # JavaScript Basics - Introduction
│   └── 01_Basics.js            # Process info, platform basics
├── Ch_02_Javascript_Basics/    # JavaScript Fundamentals
│   ├── 02.js                   # Variables with var
│   ├── 03_IdentifierRules.js   # JavaScript identifier naming rules
│   ├── 04_IdentifierCases.js   # Naming conventions (camelCase, PascalCase, etc.)
│   ├── 05_comments.js          # Single-line and multi-line comments
│   └── keyboard_Shortcuts.md   # VS Code, Windows, Browser, Git shortcuts
├── Ch_04_Javascript/           # Variables, Functions, Scope & Hoisting
│   ├── 06_let_var_const.js     # var, let, and const comparison
│   ├── 07_functions.js         # Function declarations and expressions
│   ├── 08_variable_explained.js# Variable behavior deep dive
│   ├── 09_let.js               # let keyword and block scope
│   ├── 10_const.js             # const keyword and immutability
│   ├── 11_var_functionscope.js # var function-scoped behavior
│   ├── 12_let_scope.js         # let block-scoped behavior
│   ├── 13_hoisting.js          # Variable hoisting explained
│   ├── 14_hoisting_fn.js       # Function hoisting
│   ├── 15_hoisting_let.js      # let hoisting behavior
│   ├── 16_hoisting_let_block.js# let hoisting in block scope
│   ├── 17_let_const_tdz.js     # Temporal Dead Zone for let/const
│   └── assignment.js           # Chapter 4 assignment
├── Ch_05_Literals/             # JavaScript Literals
│   ├── 18_literal.js           # Introduction to literals
│   ├── 19_null_undefined.js    # null vs undefined difference
│   ├── 20_null.js              # null usage examples
│   ├── 21_literals_all.js      # Overview of all literals
│   ├── 22_literals_number.js   # Number literals (decimal, binary, hex, etc.)
│   ├── 23_string.js            # String literals
│   ├── 24_template_literals.js # Template literals with backticks
│   └── 25_backtick_single_doublequote.js  # Quote types comparison
├── Ch_06_double_triple_equals/ # Operators, Comparisons & Logical
│   ├── 26_Operator.js          # Operators introduction
│   ├── 27_arithmetic.js        # Arithmetic operators
│   ├── 28_modulus.js           # Modulus operator
│   ├── 29_expo.js              # Exponential operator
│   ├── 30_IQ.js                # Interview questions
│   ├── 31_comparison.js         # Comparison operators
│   ├── 32_comparison_strict_vs_loose.js  # Strict vs loose equality
│   ├── 33_IQ_Strict_loose.js   # Strict vs loose interview questions
│   ├── 34_confusing_strict_loose.js      # Confusing == vs === examples
│   ├── 35_logical.js           # Logical operators
│   ├── 36_string_Concatenation.js        # String concatenation
│   ├── 37_Ternary.js           # Ternary operator
│   ├── 38_type_op.js           # typeof operator
│   ├── 39_null_op.js           # null comparison and nullish coalescing (??)
│   ├── 40_incr_decr_op.js      # Pre and post increment/decrement operators
│   ├── 45_post_incr.js         # Post-increment deep dive
│   ├── 46_IQ_incr_decr.js      # Increment/decrement interview questions
│   ├── 47_IQ_Advance.js        # Advanced increment/decrement IQ
│   ├── 18may_assign1.js        # Assignment: max of two numbers (ternary)
│   ├── 18may.assign2.js        # Assignment: max of three numbers (ternary)
│   └── 18may.assign3.js        # Assignment: increment/decrement expression
├── Ch_07_If_else/              # Conditional Statements (If-Else)
│   ├── 48_if_else.js           # Basic if-else statement
│   ├── 49_if_elseif.js         # If-else if ladder
│   ├── 50_real_if_else.js      # Real-world if-else examples
│   ├── 51_API_ifelse.js        # API response handling with if-else
│   ├── 52_IQ_if_else.js        # If-else interview questions
│   ├── 53_real_ifelse.js       # More real-world if-else scenarios
│   ├── 54_IQ_ifelse.js         # Additional if-else IQ questions
│   ├── 55_IE.js                # If-else edge cases
│   ├── 56_Question1.js         # Practice question 1
│   ├── 57_Question2.js         # Practice question 2
│   └── 58_Question3.js         # Practice question 3
├── CH_08_Switch/               # Switch Statements
│   ├── 59_switch.js            # Basic switch statement
│   ├── 60_nobreak.js           # Switch without break
│   ├── 61_default.js           # Switch default case
│   ├── 62_real_Example.js      # Real-world switch example
│   ├── 63_switch_group.js      # Grouped switch cases
│   ├── 64_IQ_switch.js         # Switch interview questions
│   ├── 65_IQ2.js               # Switch IQ question 2
│   ├── 66_IQ3.js               # Switch IQ question 3
│   └── 67_IQ4.js               # Switch IQ question 4
├── Ch09_user_input/            # User Input Handling
│   ├── 68_user_input.js        # Basic user input with prompt
│   ├── 69_userinput_2.js       # Additional user input examples
│   ├── 70_prompt_sync.js       # Synchronous prompt handling
│   ├── 71_task1.js             # Task: HTTP Status Code Categorizer
│   ├── 72_task2.js             # Task: Test Result Verdict
│   ├── 73_task3.js             # Task: Bug Severity Classifier
│   ├── 74_task4.js             # Task: Build Health Reporter
│   └── 75_task5.js             # Task: Login Lockout After Failed Attempts
├── Ch10_loops/                  # Loops in JavaScript
│   ├── 76_forloop.js            # Basic for loop
│   ├── 77_forloop2.js           # Additional for loop examples
│   ├── 78_IQ.js                 # Loop interview questions
│   ├── 79_for_of_in_each.js    # for...of and for...in basics
│   ├── 80_while loop.js         # while loop
│   ├── 81_do_while.js           # do...while loop
│   ├── 82_do_while2.js          # Additional do...while examples
│   ├── 83_IQ.js                 # Loop IQ question
│   ├── 84_IQ.js                 # Loop IQ question
│   ├── 85_IQ.js                 # Loop IQ question
│   ├── 86_IQ.js                 # Loop IQ question
│   ├── 87_Task_TriangleClassifier.js  # Task: Triangle Classifier
│   ├── 88_Task_FizzBuz.js       # Task: FizzBuzz
│   ├── 98_test_CodingQues8.js   # Coding question 8
│   ├── 99_test_CodingQuest10.js # Coding question 10
│   ├── 100_test_CodingQuest11.js# Coding question 11
│   ├── 101_test_CodingQuest12.js# Coding question 12
│   ├── 102_test_CodingQuest13.js# Coding question 13
│   ├── 103_test_CodingQuest14.js# Coding question 14
│   └── 104_test_CodingQuest15.js# Coding question 15
├── Ch11_Arrays/                 # Arrays in JavaScript
│   ├── 105_arrays.js            # Arrays introduction and basic creation
│   ├── 106_arrays.js            # Array constructors and creation methods
│   ├── 107_access_array.js      # Accessing and modifying array elements
│   ├── 108_array_adding_remove.js # Adding and removing elements (push, pop, shift, unshift)
│   ├── 109_adding_removing2.js  # Splice for adding, removing, and replacing elements
│   ├── 110_real_example.js      # Real-world array example with browser list
│   ├── 111_searching.js         # Array searching methods (indexOf, find, includes)
│   ├── 112_iterate.js           # Array iteration methods (for, forEach, for...of, entries)
│   ├── 113_transform.js         # Array transformation methods (map, filter, reduce, flat)
│   ├── 114_sorting.js           # Array sorting methods
│   ├── 115_slicing.js           # Array slicing with slice()
│   ├── 116_concat_Array.js      # Array concatenation with concat()
│   └── 117_array_checking.js    # Array checking methods (Array.isArray, instanceof)
├── Ch12_Functions/             # Functions in JavaScript
│   ├── 118_functions.js         # Functions introduction
│   ├── 119_type1_basic_function.js # Basic function (no parameter, no return)
│   ├── 120_type2_function.js    # Function with parameters
│   ├── 121_type3_function.js   # Function with return value
│   ├── 122_type4_function.js   # Function with parameters and return
│   ├── 123_template_literal.js  # Template literals in functions
│   ├── 124_fn_Expression.js    # Function expressions
│   ├── 125_arrow_fn.js         # Arrow functions
│   ├── 126_Arrow_fn_Real_Ex.js # Real-world arrow function examples
│   ├── 127_iife.js             # Immediately Invoked Function Expressions (IIFE)
│   ├── 128_default_param.js    # Default parameters in functions
│   ├── 129_IQ.js               # Function interview questions
│   ├── 130_rest_params.js      # Rest parameters (...args)
│   ├── 131_IQ.js               # Rest parameters interview questions
│   ├── 132_spread_IQ.js        # Spread operator interview questions
│   ├── 133_scope.js            # Scope in JavaScript (global, function, block)
│   ├── 134_IQ.js               # Scope interview questions
│   ├── 135_closure.js          # Closures introduction
│   ├── 136_closure2.js         # Closures practical examples
│   ├── 137_closure3.js         # Advanced closures
│   ├── 138_higher_order_fn.js  # Higher-order functions
│   ├── 139_pure_fn.js          # Pure functions
├── Ch13_Strings/                # Strings in JavaScript
│   ├── 140_strings.js           # String creation (single, double, template literals, multiline)
│   ├── 141_string_properties.js # String properties (length, index access, charAt, charCodeAt)
│   ├── 142_search_check.js      # String searching (includes, startsWith, endsWith, indexOf)
│   ├── 143_substring.js         # Substring methods (slice, substring)
│   ├── 144_transform.js         # String transformation (toUpperCase, trim, replace, replaceAll)
│   ├── 145_String_conversion.js # String and number conversion (toString, parseInt, parseFloat)
│   ├── 146_task_String_reverse.js # Task: Palindrome checker
│   ├── 147_task_Anagrams.js     # Task: Anagram checker
├── Ch14_Objects/                 # Objects in JavaScript
│   ├── 148_objects.js            # Object literals and basic syntax
│   ├── 149_objects2.js           # Property access (dot vs bracket), reference copying
│   ├── 150_object_creation.js    # Object comparison by reference
│   ├── 151_objects_real.js       # Real-world config object (add/delete properties)
│   ├── 152_primitive_ref         # Primitive copy by value vs object copy by reference
│   ├── 153_object_Examples.js    # JSON-style vs JS-style object syntax
│   ├── 154_IQ.js                 # Dynamic property access, property descriptors
│   ├── 155_obj_with_fn.js        # Objects with methods
│   ├── 156_obj_deconstruct.js    # Object destructuring (basic, rename, defaults, nested)
│   ├── 157_spread.js             # Object spread operator for copying
│   ├── 158_obj_get_Set_method.js # Getters and setters
│   ├── 159_obj_IQ.js             # Object.keys, values, entries, for...in iteration
│   ├── 160_obj_real.js           # Real-world object examples
│   └── 161_let_vs_const_obj.js   # Best practices: using const for objects
├── Ch15_2D_array/               # 2D Arrays & Star Patterns
│   ├── 162_2D_Array.js           # Creating and iterating over 2D arrays
│   ├── 163_IQ.js                 # 2D array dimensions and access
│   ├── 164_Real.js               # Test-case data as 2D array
│   ├── 165_2d_array_fn.js        # Row-wise sums with map/reduce
│   ├── 166_IQ_right_pattern.js   # Right-angled triangle star pattern
│   ├── 167_Task_reverse_Py.js    # Inverted/descending star pyramid
│   ├── 168_task2_py.js           # Centered pyramid star pattern
├── Ch16_Callbacks/               # Callbacks in JavaScript
│   ├── 160_CB_Hell.js            # Callback hell (QA browser login flow)
│   ├── 169_callback.js           # Basic callbacks (function as argument, arrow)
│   ├── 170_callback2.js          # Additional callback examples
│   ├── 171_callback3.js          # More callback examples
│   ├── 172_PW_CB.js              # Playwright callback example
│   ├── 173_js_Callback.js        # JavaScript callback patterns
│   ├── 174_sync.js               # Synchronous callback (forEach test results)
│   ├── 175_async.js              # Asynchronous callback (setTimeout API)
│   ├── 176_CB_parameter.js       # Callback with parameters
│   └── 177_cb_return.js          # Callback with return values
└── README.md                    # This file
```

## Chapters Overview

### Chapter 1: JavaScript Basics
Introduction to JavaScript runtime environment and basic console output.

### Chapter 2: JavaScript Fundamentals
- **Variables**: Declaring and using variables with `var`
- **Identifier Rules**: Valid and invalid identifier names in JavaScript
- **Identifier Cases**: Naming conventions including:
  - camelCase
  - PascalCase
  - snake_case
  - UPPER_SNAKE_CASE (constants)
  - kebab-case
  - Hungarian notation
- **Comments**: Single-line and multi-line comments
- **Keyboard Shortcuts**: Reference guide for VS Code, Windows, Browser, Git, and Playwright

### Chapter 4: Variables, Functions, Scope & Hoisting
- **`var`, `let`, `const`**: Comparison of variable declaration keywords
- **Functions**: Function declarations and expressions
- **Variable Scope**: Function scope (`var`) vs block scope (`let`/`const`)
- **Hoisting**: How JavaScript hoists variable and function declarations

### Chapter 5: Literals
- **Introduction to Literals**: What literals are and their types
- **null vs undefined**: Differences, behaviors, and use cases
- **Number Literals**: Decimal, floating-point, binary, octal, hexadecimal, BigInt, exponential notation
- **String Literals**: Single quote, double quote, and template literals
- **Quote Comparison**: Differences between `'`, `"`, and `` ` ``

### Chapter 6: Operators, Comparisons & Logical
- **Arithmetic Operators**: Addition, subtraction, multiplication, division, modulus, exponentiation
- **Comparison Operators**: Loose equality (`==`) vs strict equality (`===`)
- **Confusing Cases**: Examples of unexpected type coercion with `==`
- **Logical Operators**: AND, OR, NOT
- **String Concatenation**: Combining strings with `+`
- **Ternary Operator**: Conditional expressions with `? :`
- **typeof Operator**: Checking variable types
- **nullish Coalescing Operator (`??`)**: Handling `null` and `undefined` defaults
- **Increment & Decrement Operators**: Pre (`++a`) and post (`a++`) increment/decrement
- **Assignments**: Practical exercises on ternary operators and complex increment/decrement expressions

### Chapter 7: Conditional Statements (If-Else)
- **Basic If-Else**: Simple conditional branching
- **If-Else If Ladder**: Multiple condition checks
- **Real-World Examples**: Practical scenarios using if-else
- **API Response Handling**: Using conditionals with API data
- **Interview Questions**: Common if-else IQ and edge cases
- **Practice Questions**: Hands-on exercises

### Chapter 8: Switch Statements
- **Basic Switch**: Switch-case structure and syntax
- **No Break Behavior**: Fall-through behavior in switch
- **Default Case**: Handling unmatched cases
- **Real-World Examples**: Practical switch usage
- **Grouped Cases**: Combining multiple cases
- **Interview Questions**: Switch-related IQ problems

### Chapter 9: User Input Handling
- **Basic User Input**: Using `prompt()` for input
- **Input Conversion**: Converting string input to numbers
- **Synchronous Prompt**: Handling user input synchronously
- **Tasks & Practice**:
  - HTTP Status Code Categorizer (conditional branching)
  - Test Result Verdict (comparing expected vs actual results)
  - Bug Severity Classifier (impact score classification)
  - Build Health Reporter (CI build health based on pass percentage)
  - Login Lockout After Failed Attempts (attempt tracking and lockout)

### Chapter 10: Loops
- **For Loop**: Basic iteration with initialization, condition, and increment
- **While Loop**: Condition-based iteration
- **Do...While Loop**: Post-condition iteration (executes at least once)
- **for...of / for...in**: Iterating over iterable objects and object properties
- **Interview Questions**: Common loop-related IQ and edge cases
- **Tasks & Practice**:
  - Triangle Classifier (using conditionals with loops)
  - FizzBuzz (classic loop-based problem)
- **Coding Questions (98-104)**: Additional loop practice exercises

### Chapter 11: Arrays
- **Creating Arrays**: Array literals, `new Array()`, `Array.of()`, and `Array.from()`
- **Accessing Elements**: Using index and `.at()` method (including negative indexing)
- **Modifying Arrays**: Updating elements by index
- **Adding & Removing Elements**:
  - `push()` / `pop()` — add/remove from end
  - `shift()` / `unshift()` — add/remove from beginning
  - `splice()` — add, remove, or replace elements at any position
- **Searching Arrays**: `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`
- **Iteration Methods**: `for` loop, `for...of`, `forEach()`, `for...in`, and `.entries()`
- **Transformation Methods**: `map()`, `filter()`, `reduce()`, and `flat()`
- **Sorting Arrays**: `sort()` with default and custom comparator functions
- **Slicing Arrays**: `slice()` for extracting portions without mutating original
- **Concatenating Arrays**: `concat()` for merging arrays
- **Array Checking**: `Array.isArray()` and `instanceof` for type verification
- **Real-World Example**: Managing a list of browser names

### Chapter 12: Functions
- **Function Basics**: Introduction to function declarations and calls
- **Function Types**:
  - Type 1: No parameters, no return value
  - Type 2: With parameters, no return value
  - Type 3: No parameters, with return value
  - Type 4: With parameters and return value
- **Template Literals**: Using backtick strings inside functions
- **Function Expressions**: Storing functions in variables
- **Arrow Functions**: Concise function syntax with `=>`
- **Real-World Arrow Functions**: Practical arrow function examples
- **IIFE**: Immediately Invoked Function Expressions
- **Default Parameters**: Setting default values for function parameters
- **Rest Parameters**: Collecting remaining arguments with `...args`
- **Spread Operator**: Expanding arrays/iterables with `...`
- **Scope**: Global scope, function scope, and block scope
- **Closures**: Functions retaining access to their lexical scope
- **Higher-Order Functions**: Functions that take or return other functions
- **Pure Functions**: Functions with no side effects and deterministic output
- **Interview Questions**: Function-related IQ and edge cases (129, 131, 132, 134)

### Chapter 13: Strings
- **String Creation**: Single quotes, double quotes, template literals, and multiline strings
- **String Properties**: `length`, index access (`[]`), `.at()`, `.charAt()`, `.charCodeAt()`
- **Searching & Checking**: `.includes()`, `.startsWith()`, `.endsWith()`, `.indexOf()`, `.lastIndexOf()`
- **Substring Methods**: `.slice()` and `.substring()` for extracting parts of strings
- **Transformation**: `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.replace()`, `.replaceAll()`
- **Type Conversion**: `.toString()`, `Number()`, `parseInt()`, `parseFloat()`
- **Tasks & Practice**:
  - Palindrome Checker (reverse string and compare)
  - Anagram Checker (sort and compare character arrays)

### Chapter 14: Objects
- **Object Basics**: Creating objects with literals and accessing properties (dot vs bracket notation)
- **Reference Behavior**: Objects are copied by reference; comparison checks reference equality
- **Property Management**: Adding, modifying, and deleting properties dynamically
- **Primitive vs Reference**: Understanding copy-by-value for primitives vs copy-by-reference for objects
- **JSON vs JS Syntax**: JSON requires quoted keys; JS objects allow unquoted keys
- **Dynamic Property Access**: Using bracket notation with variables for dynamic keys
- **Object Methods**: Defining functions as object properties
- **Destructuring**: Extracting properties with destructuring, renaming, default values, and nested destructuring
- **Spread Operator**: Copying and merging objects with `...`
- **Getters & Setters**: Using `get` and `set` for computed properties
- **Object Iteration**: `Object.keys()`, `Object.values()`, `Object.entries()`, and `for...in` loops
- **Interview Questions**: Object property access, property descriptors, and iteration patterns

### Chapter 15: 2D Arrays & Star Patterns
- **2D Arrays**: Creating and iterating over 2D arrays with nested loops
- **Real-World Example**: Modeling test-case data as a 2D array with `for...of` and `forEach`
- **Functional Programming**: Row-wise sums using `map` and `reduce`, scanning for failure strings
- **Star Patterns**:
  - Right-angled triangle (ascending stars)
  - Inverted/descending pyramid
  - Centered pyramid using 2D array grid

### Chapter 16: Callbacks
- **Basic Callbacks**: Passing functions as arguments using regular functions and arrow functions
- **Synchronous Callbacks**: Using `forEach` with callback for test result iteration
- **Asynchronous Callbacks**: Using `setTimeout` to simulate async API responses
- **Callback with Parameters**: Passing data to callback functions
- **Callback Return Values**: Functions that return callbacks
- **Callback Hell**: Nested callbacks simulating a browser login flow (open browser → login page → enter credentials → click login)

## How to Run

Execute any JavaScript file using Node.js:

```bash
node Ch_02_Javascript_Basics/04_IdentifierCases.js
```

Or run directly in VS Code terminal.

## Technologies

- **JavaScript (ES6+)**
- **Node.js**
- **Playwright** (upcoming)
- **VS Code**

## Resources

- [VS Code Keyboard Shortcuts](Ch_02_Javascript_Basics/keyboard_Shortcuts.md)

## Author

[Saba Saeed](https://github.com/sabasaeedss)

## License

This project is for educational purposes.
