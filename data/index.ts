export type Admin = {
  user: string;
  password: string;
};

export const admins: Admin[] = [
  {
    user: "admin",
    password: "admin",
  },
];

export type Address = {
  city: string;
  street: string;
  number: number;
  commune: string;
};

export type Client = {
  RUT: string;
  name: string;
  lastName: string;
  telephone: string;
  address: Address;
};

export type BranchOffice = {
  country: string;
  currency: string;
};

export const clients: Client[] = [
  {
    RUT: "AAA123",
    name: "Alejandro",
    lastName: "González Díez",
    telephone: "3183544998",
    address: {
      city: "Bogotá",
      street: "135",
      number: 30,
      commune: "1",
    },
  },
  {
    RUT: "BBB123",
    name: "Alejandro",
    lastName: "González Díez",
    telephone: "3183544998",
    address: {
      city: "Bogotá",
      street: "135",
      number: 30,
      commune: "1",
    },
  },
];

export const branchOffices: BranchOffice[] = [
  {
    country: "Argentina",
    currency: "ARS",
  },
  {
    country: "Bolivia",
    currency: "BOB",
  },
  {
    country: "Brasil",
    currency: "BRL",
  },
  {
    country: "Chile",
    currency: "CLP",
  },
  {
    country: "Colombia",
    currency: "COP",
  },
  {
    country: "Costa Rica",
    currency: "CRC",
  },
  {
    country: "Cuba",
    currency: "CUP",
  },
  {
    country: "República Dominicana",
    currency: "DOP",
  },
  {
    country: "Ecuador",
    currency: "USD",
  },
  {
    country: "El Salvador",
    currency: "USD",
  },
  {
    country: "Guyana",
    currency: "GYD",
  },
  {
    country: "Guatemala",
    currency: "GTQ",
  },
  {
    country: "Honduras",
    currency: "HNL",
  },
  {
    country: "México",
    currency: "MXN",
  },
  {
    country: "Nicaragua",
    currency: "NIO",
  },
  {
    country: "Panamá",
    currency: "PAB",
  },
  {
    country: "Paraguay",
    currency: "PYG",
  },
  {
    country: "Perú",
    currency: "PEN",
  },
  {
    country: "Puerto Rico",
    currency: "USD",
  },
  {
    country: "Uruguay",
    currency: "UYU",
  },
  {
    country: "Venezuela",
    currency: "VES",
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  branchOffice?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "PC",
    price: 3000000,
    stock: 2,
    branchOffice: "Colombia",
  },
];
