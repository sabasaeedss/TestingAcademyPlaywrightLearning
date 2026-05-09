// Identifier Naming Conventions (Cases) Examples in JavaScript

// 1. camelCase
// Commonly used for: variables, functions, methods
// First word lowercase, subsequent words capitalized
const userName = "JohnDoe";
const totalScore = 95;
const isActiveUser = true;

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

function getUserInfo() {
    return { userName, totalScore, isActiveUser };
}

console.log("camelCase variable:", userName);
console.log("camelCase function:", calculateTotalPrice(10, 5));


// 2. PascalCase (UpperCamelCase)
// Commonly used for: class names, constructor functions, React components
// Every word starts with a capital letter
class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `${this.name} - ${this.email}`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }
}

const userAccount = new UserAccount("Alice", "alice@example.com");
console.log("PascalCase class instance:", userAccount.getDetails());


// 3. snake_case (lowercase with underscores)
// Commonly used for: database fields, some API keys, Pythonic style in JS config
const user_name = "JohnDoe";
const total_score = 95;
const is_active_user = true;

function calculate_total_price(price, quantity) {
    return price * quantity;
}

console.log("snake_case variable:", user_name);
console.log("snake_case function:", calculate_total_price(10, 5));


// 4. UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE / CONSTANT_CASE)
// Commonly used for: constants, configuration values, environment-based values
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const PI_VALUE = 3.14159;
const DATABASE_CONFIG = {
    HOST: "localhost",
    PORT: 5432,
    NAME: "mydb"
};

console.log("UPPER_SNAKE_CASE constant:", MAX_USERS);
console.log("UPPER_SNAKE_CASE config:", API_BASE_URL);


// 5. kebab-case (not valid for JS identifiers, but used in file names, CSS, URLs)
// In JavaScript, kebab-case cannot be used for variable or function names because
// the hyphen (-) is interpreted as a subtraction operator.
// However, it is commonly used for:
// - File names: my-script.js, user-profile-card.jsx
// - CSS class names: .user-profile-card, .main-container
// - HTML attributes: data-user-id, aria-label

// Examples of kebab-case usage (commented to show convention only):
// file-name: 04-Identifier-Cases.js
// CSS: .user-profile { color: blue; }
// HTML: <div data-user-role="admin"></div>

// If you need to use kebab-case keys in JS objects, use quotes:
const cssClasses = {
    "user-profile": "profile-card",
    "main-container": "container-fluid",
    "is-active": true
};

console.log("kebab-case as object key:", cssClasses["user-profile"]);


// 6. Hungarian Notation (mostly legacy, less common in modern JS)
// Prefix indicates the type or purpose of the variable
const strUserName = "JohnDoe";      // str = string
const nTotalScore = 95;             // n = number
const bIsActive = true;             // b = boolean
const arrUsers = ["Alice", "Bob"];  // arr = array
const objUser = { id: 1 };          // obj = object
const fnCallback = () => {};        // fn = function

console.log("Hungarian notation string:", strUserName);
console.log("Hungarian notation number:", nTotalScore);


// Summary Output
console.log("\n=== Identifier Cases Summary ===");
console.log("camelCase       :", "userName, calculateTotalPrice()");
console.log("PascalCase      :", "UserAccount, ShoppingCart");
console.log("snake_case      :", "user_name, calculate_total_price()");
console.log("UPPER_SNAKE_CASE:", "MAX_USERS, API_BASE_URL");
console.log("kebab-case      :", "(not valid for JS identifiers, used in filenames/CSS)");
console.log("Hungarian       :", "strUserName, nTotalScore, bIsActive (legacy style)");
