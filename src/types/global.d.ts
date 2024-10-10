declare global {
  interface Demo {
    id: number;
    name: string;
    email: string;
  }
}

// Required to make this file a module and avoid global scope pollution.

// eslint-disable-next-line prettier/prettier
export {};
