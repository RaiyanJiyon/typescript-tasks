function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(makingCompany: string, year: number) {
    this._make = makingCompany;
    this._year = year;
  }

  getInfo() {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(makingCompany: string, year: number, model: string) {
    super(makingCompany, year);
    this._model = model;
  }

  getModel() {
    return `Model: ${this._model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  }
  return 0;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive: Product | null = null;
  let highestPrice = -1;

  products.forEach((product) => {
    if (product.price > highestPrice) {
      highestPrice = product.price;
      mostExpensive = product;
    }
  });

  return mostExpensive;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (
    day === Day.Monday ||
    day === Day.Tuesday ||
    day === Day.Wednesday ||
    day === Day.Thursday ||
    day === Day.Friday ||
    day === Day.Saturday
  ) {
    return "Weekday";
  } else if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Unknown";
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Error: Negative number not allowed"));
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
