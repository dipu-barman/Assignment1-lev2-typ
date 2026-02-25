

🎯 TypeScript Interview Blog

১️⃣ TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type — দুটোই object structure define করার জন্য ব্যবহার করা হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

🔹 ১. Declaration Merging

interface একই নামে একাধিকবার declare করা যায় এবং সেগুলো automatically merge হয়ে যায়।

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Dipu",
  age: 25
};

কিন্তু type এ একই নাম দুইবার declare করলে error হবে।

type User = {
  name: string;
};

type User = {   // ❌ Error
  age: number;
};
🔹 ২. Union এবং Intersection Support

type দিয়ে union (|) এবং intersection (&) খুব সহজে করা যায়।

type Admin = {
  role: string;
};

type Person = {
  name: string;
};

type AdminPerson = Admin & Person;

interface দিয়েও extend করা যায়, তবে union সরাসরি করা যায় না।

🔹 ৩. Primitive Type Support

type primitive type define করতে পারে:

type ID = string | number;

কিন্তু interface দিয়ে primitive define করা যায় না।

🔹 ৪. Extend করার পদ্ধতি

interface:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

type:

type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};


👉 সাধারণত object structure define করার জন্য interface বেশি ব্যবহৃত হয়, আর complex type (union, primitive, function type) এর জন্য type বেশি flexible।


২️⃣ any, unknown, এবং never এর মধ্যে পার্থক্য

TypeScript-এ এই তিনটি type খুব গুরুত্বপূর্ণ।

🔹 ১. any

any ব্যবহার করলে TypeScript type checking বন্ধ করে দেয়।

let value: any = "Hello";
value = 10;
value = true;

এতে type safety থাকে না। তাই any ব্যবহার করা discouraged।

🔹 ২. unknown

unknown হচ্ছে safer version of any।

let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

unknown ব্যবহার করলে আগে type check করতে হয়। তাই এটি নিরাপদ।

🔹 ৩. never

never এমন type যা কখনো কোনো value return করে না।

উদাহরণ:

function throwError(message: string): never {
  throw new Error(message);
}

এছাড়া infinite loop থাকলেও never হতে পারে:

function infiniteLoop(): never {
  while (true) {}
}
