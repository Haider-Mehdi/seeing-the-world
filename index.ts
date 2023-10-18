// Step 1
let myfavouritePlaces = ["Tokyo","Dubai", "New York", "Maldives", "Baku"]

// Step 2
console.log(`\nOriginal order:`, myfavouritePlaces)

// Step 3
console.log(`\nAlphabetical order:` , [...myfavouritePlaces].sort())

// Step 4
console.log(`\nIt is still in original order`, myfavouritePlaces)

// Step 5
console.log(`\nReverse Alphabetical order:` , [...myfavouritePlaces].sort().reverse())

// Step 6
console.log(`\nIt is still in original order`, myfavouritePlaces)

// Step 7
myfavouritePlaces.reverse()
console.log(`\nReverse order:` ,myfavouritePlaces)

// Step 8
myfavouritePlaces.reverse()
console.log(`\nBack to original order:` ,myfavouritePlaces)

// Step 9
myfavouritePlaces.sort()
console.log(`\n Alphabetical order:` , myfavouritePlaces)

// Step 10
myfavouritePlaces.sort().reverse()
console.log(`\n Reverse Alphabetical order:` , myfavouritePlaces)
