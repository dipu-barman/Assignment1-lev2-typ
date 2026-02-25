"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// problem 1 
function formatValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        return !value;
    }
}
// Problem 2
function getLength(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value.length;
    }
}
//Problem 3
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}
function printBookDetails(book) {
    const availability = book.isAvailable ? 'Yes' : 'No';
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}
// problem 7
function getUniqueValues(arr1, arr2) {
    const combined = [];
    const result = [];
    for (const value of arr1) {
        combined[combined.length] = value;
    }
    for (const value of arr2) {
        combined[combined.length] = value;
    }
    for (const currentValue of combined) {
        let exists = false;
        for (const existingValue of result) {
            if (currentValue === existingValue) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = currentValue;
        }
    }
    return result;
}
function calculateTotalPrice(products) {
    if (products.length === 0) {
        return 0;
    }
    return products.reduce((total, product) => {
        let productTotal = product.price * product.quantity;
        if (product.discount !== undefined) {
            productTotal -= (productTotal * product.discount) / 100;
        }
        return total + productTotal;
    }, 0);
}
//# sourceMappingURL=solution.js.map