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
└── README.md                   # This file
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
