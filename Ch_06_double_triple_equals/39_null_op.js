console.log(null >= 0); // Output: true
console.log(null === 0); // Output: false

let amul = null;
let milk_required = amul ?? 'No milk required';
console.log(milk_required); // Output: No milk required