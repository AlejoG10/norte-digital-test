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
    country: "Colombia",
    currency: "COP",
  },
  {
    country: "Argentina",
    currency: "ARS",
  },
  {
    country: "Mexico",
    currency: "MXN",
  },
  {
    country: "Brazil",
    currency: "BRL",
  },
  {
    country: "Chile",
    currency: "CLP",
  },
  {
    country: "Peru",
    currency: "PEN",
  },
  {
    country: "Ecuador",
    currency: "USD",
  },
  {
    country: "Venezuela",
    currency: "VES",
  },
  {
    country: "Uruguay",
    currency: "UYU",
  },
  {
    country: "Paraguay",
    currency: "PYG",
  },
  {
    country: "Bolivia",
    currency: "BOB",
  },
  {
    country: "Guatemala",
    currency: "GTQ",
  },
];
