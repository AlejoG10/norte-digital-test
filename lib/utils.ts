import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function genId() {
  return uuidv4();
}

export function genRand(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

export const valor = new Intl.NumberFormat("co-CO", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
