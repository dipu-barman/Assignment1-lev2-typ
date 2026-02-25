// problem 1 
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
}
// Problem 2
function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value.length;
  }
}
//Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Problem 4
type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

// Problem 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

// Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? 'Yes' : 'No';
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

// problem 7

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const combined: T[] = [];
  const result: T[] = [];

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

// problem 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
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